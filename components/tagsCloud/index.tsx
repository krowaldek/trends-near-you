import Tag, { tag } from './tag'
import styles from './styles.module.scss'
import React, { useEffect, useState } from 'react'
import * as R from 'ramda'

interface PropsTagsCloud {
    tags: tag[]
}
interface SizedTag extends tag {
    size: number | undefined
}

type TagsRange = {
    min: number,
    max: number,
    avg: number
}
const TagsCloud = ({ tags }:PropsTagsCloud) => {
  const [sizedTags, setSizedTags] = useState<SizedTag[]>([])

  useEffect(() => {
    const tagsRange = calcRange(tags)
    setSizedTags(R.map(sizeOfTag(tagsRange), tags))
  }, [tags])
  return (
    <div className={styles.tagsCloud}>
      {sizedTags.map((tag, index) =>
        <Tag key={index} tag={tag} size={tag.size} />
      )}

    </div>
  )
}
export default TagsCloud

const sizeOfTag = R.curry((range: TagsRange, tag: tag): SizedTag => {
  const size = tag.value && tag.value > range.avg ? (tag.value / (range.max - range.avg)) : undefined

  return {
    ...tag,
    size: size
  }
})

const calcRange = (tags: tag[]): TagsRange => {
  const values = getValues(tags)
  return {
    min: R.apply(Math.min, values),
    max: R.apply(Math.max, values),
    avg: R.reduce(R.add, 0, values) / values.length
  }
}

const getValues = R.compose<tag[][], tag[], number[]>(
  R.map(x => x.value as number),
  R.filter<tag>(x => x.value !== null)
)
