import * as R from 'ramda'
import React from 'react'
import ListItem, { ListItemProps } from './listItem'
import styles from './styles.module.scss'

interface ListProps {
    items: ListItemProps[],
    styleName: string,
    clickHandler?: (e: React.MouseEvent, name: string) => void

}
const List = (props: ListProps) => {
  const mapIndexed = R.addIndex(R.map)

  const clickHandler = (e: React.MouseEvent, name: string) => {
    if (props.clickHandler) props.clickHandler(e, name)
  }

  const isListItemProps = (item: any): item is ListItemProps => (item as ListItemProps).name !== undefined

  const generateNodes = (item: unknown, index: number) => { if (isListItemProps(item)) return (<ListItem key={index} name={item.name} title={item.title} img={item.img} clickHandler={clickHandler} />) }
  const itemsNodes = mapIndexed(generateNodes, props.items)
  return (
    <div className={styles.list + ' ' + (props.styleName || '')}>
      {itemsNodes}
    </div>
  )
}

export default List
