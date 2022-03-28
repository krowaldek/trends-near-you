import styles from './styles.module.scss'
import React from 'react'

export type tag = {
    name: string,
    value: number | null,
    query: string
}

interface PropsTag {
    tag: tag,
    /** Relative to base font size   */
    size: number | undefined
}
const baseFontSize = 16
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
