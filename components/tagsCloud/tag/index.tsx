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
    /** Multiplier of base font size
     * Eg. 1.4
    */
    size: number | undefined
}
const baseFontSize = 16

/**
 *
 * Component for showing details of the user.
 * @namespace
 * @category Components
 * @property {tag} tag object
 * @property {size} tag object
 * @returns {JSX.Element}
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
const Tag = ({ tag, size } : PropsTag) => {
  const calculatedSize = size ? baseFontSize * (1 + size) : baseFontSize
  return (
    <div data-testid='item' className={styles.tag} style={{ fontSize: `${calculatedSize}px` }}>{tag.name} {
    tag.value && `(${tag.value})`
    }
    </div>
  )
}
export default Tag
