import React from 'react'
import { TrendLocationV1 } from 'twitter-api-v2'
import styles from './styles.module.scss'
interface propsSearchResultsItem {
    item: TrendLocationV1,
    clickHandler?: (e: React.MouseEvent, woeid: number) => void

}
const SearchResultsItem = ({ item, clickHandler = () => {} }: propsSearchResultsItem) => {
  const handler = (e: React.MouseEvent) => {
    clickHandler(e, item.woeid)
  }
  return (
    <div data-testid='listitem' className={styles.item} onClick={handler}>
      <div data-testid='heading' className={styles.item__name}>{item.name}</div>
      <div data-testid='description' className={styles.item__place}>{item.countryCode}</div>
    </div>
  )
}
export default SearchResultsItem
