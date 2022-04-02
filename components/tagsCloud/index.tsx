import Tag from './tag'
import { Tag as TagModel } from '../../common/model'
import styles from './styles.module.scss'
import React, { useEffect, useState } from 'react'
import * as R from 'ramda'

/**
 * Component props
 * @memberof TagsCloud
 */
type PropsTagsCloud = {
    /** Tags array */
    tags: TagModel[],
    /** Event fired when tag is clicked */
    clickHandler: (tag: TagModel) => void
}
/**
 * Tag with calculated font size based on the volume
 * @memberof TagsCloud
 */
type SizedTag = TagModel & {
    /** Calculated font size */
    size: number | undefined
}

/**
 * Range of volumes of array of tags
 * @memberof TagsCloud
 */
type TagsRange = {
    /** Minimal value */
    min: number,
    /** Maximal value */
    max: number,
    /** Average value */
    avg: number
}
/**
 * Tag cloud with tags sized based on their volume
 * @namespace
 * @category Components
 * @param {TagModel[]} tags - tags to display
 * @returns {JSX.Element} JSX Element
 */
const TagsCloud = ({ tags, clickHandler }: PropsTagsCloud) => {
  const [sizedTags, setSizedTags] = useState<SizedTag[]>([])

  useEffect(() => {
    const tagsRange = calcRange(tags)
    setSizedTags(R.map(sizeOfTag(tagsRange), tags))
  }, [tags])
  const onClickHandler = (tag: TagModel) => {
    clickHandler(tag)
  }
  return (
    <div className={styles.tagsCloud}>
      {sizedTags.map((tag, index) =>
        <Tag key={index} tag={tag} size={tag.size} clickHandler={onClickHandler} />
      )}

    </div>
  )
}
export default TagsCloud

/**
 * Calculate size of tag based on the volume.
 * It search for value between average and maximum range value and
 * divide by difference between maximum and average range value.
 * @memberof TagsCloud
 * @method
 * @param {TagsRange} tagsRange - range of volumes of array of tags
 * @returns {SizedTag} SizedTag - tag with calculated font size
 */
const sizeOfTag = R.curry((range: TagsRange, tag: TagModel): SizedTag => {
  const size = tag.value && tag.value > range.avg ? (tag.value / (range.max - range.avg)) : undefined

  return {
    ...tag,
    size: size
  }
})

/**
 * Calculate range of volumes of tags from array of tags
 * @memberof TagsCloud
 * @param {TagModel[]} Tags - array of tags
 * @returns {TagsRange} TagsRange
 */
const calcRange = (tags: TagModel[]): TagsRange => {
  const values = getValues(tags)
  return {
    min: R.apply(Math.min, values),
    max: R.apply(Math.max, values),
    avg: R.reduce(R.add, 0, values) / values.length
  }
}
/**
 * Take non null volume tags from array of tags
 * @memberof TagsCloud
 * @method
 * @param {TagModel[]} tags - array of tags
 * @returns {number[]} number - array of volumes of tags
 */
const getValues = R.compose<TagModel[][], TagModel[], number[]>(
  R.map(x => x.value as number),
  R.filter<TagModel>(x => x.value !== null)
)
