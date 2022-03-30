import styles from './styles.module.scss'
import React from 'react'

/**
 * Tag model
 * @memberof Tag
 */
export type tag = {
  /** Display name  */
    name: string,
     /** Number of tagged tweets */
    value: number | null,
     /** Query to search for tweets  */
    query: string
}

/**
 * Component props
 *
 */
interface PropsTag {
    /** Tag object   */
    tag: tag,
    /** Multiplier of base font size
     * Eg. 1.4
    */
    size: number | undefined
}
const baseFontSize = 16

/**
 *
 * Component for showing details of the user.
 *
 * @namespace Tag
 * @category Components
 * @component
 * @property {tag} tag object
 * @property {size} tag object
 * @returns {React.ReactElement}
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
