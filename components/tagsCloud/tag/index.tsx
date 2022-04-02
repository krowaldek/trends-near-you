import styles from './styles.module.scss'
import React from 'react'
import { Tag as TagModel } from '../../../common/model'

/**
 * Component props
 * @memberof Tag
 */
type PropsTag = {
    /** Tag object   */
    tag: TagModel,
    /** Multiplier of base font size. Example 1.4 */
    size: number | undefined
    /** Event fired when tag is clicked */
    clickHandler: (tag: TagModel) => void
}
const baseFontSize = 16

/**
 * Component represent single tag.
 * @namespace
 * @category Components
 * @param {TagModel} tag - tag model object
 * @param {number | undefined} size - Multiplier of base font size. Example 1.4
 * @returns {JSX.Element} JSX Element
 * @example
 *
 * const tag = {
 *  name: 'user',
 *  value: '16',
 *  query: 'query'
 * }
 * const size = 16
 *
 * <Tag tag={tag} size={size} />
 */
const Tag = ({ tag, size, clickHandler } : PropsTag) => {
  const calculatedSize = size ? baseFontSize * (1 + size) : baseFontSize
  const handler = () => {
    clickHandler(tag)
  }
  return (
    <div data-testid='item' className={styles.tag} onClick={handler} style={{ fontSize: `${calculatedSize}px` }}>{tag.name} {
    tag.value && `(${tag.value})`
    }
    </div>
  )
}
export default Tag
