import React from 'react'
import CircleBtn from '../../circleBtn'
import styles from './styles.module.scss'
export interface ListItemProps {
    /** identifier of item */
    name: string,
    /** displayed title */
    title: string,
    /** displayed img in icon */
    img: string
    clickHandler?: (e: React.MouseEvent, name: string) => void
}
const ListItem = (props: ListItemProps) => {
  const clickHandler = (e: React.MouseEvent) => {
    if (props.clickHandler) props.clickHandler(e, props.name)
  }
  return (
    <div className={styles.listItem} onClick={clickHandler}>
      <CircleBtn imgSrc={props.img} selected={false} selectable={false} />
      <div className={styles.listItem__title}>{props.title}</div>
    </div>
  )
}
export default ListItem
