import React, { useState } from 'react'
import styles from './styles.module.scss'
interface CircleBtnProps {
    /** path to image to show in button */
    imgSrc: string,
    /** optional img alt text (default: 'account button) */
    imgAlt?: string,
    /** control state of the button */
    selected: boolean,
    /** allow select button */
    selectable?: boolean
    /** optional button click event handler */
    clickHandler?: (e: React.MouseEvent) => void
}

const CircleBtn = (props: CircleBtnProps) => {
  const [isSelected, setSelected] = useState(props.selected)
  const altText = props.imgAlt ? props.imgAlt : 'account button'

  const handleClick = (e: React.MouseEvent) => {
    if (props.selectable) setSelected(!isSelected)
    if (props.clickHandler) props.clickHandler(e)
  }
  const selectedClassName = isSelected ? styles.selected : ''
  return (
    <div className={styles.button}>
      <img
        alt={altText}
        src={props.imgSrc}
        className={`${selectedClassName} ${styles.button__image}`}
        onClick={handleClick}
      />
    </div>
  )
}
export default CircleBtn
