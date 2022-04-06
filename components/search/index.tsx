import styles from './styles.module.scss'
import React, { useEffect, useRef, useState } from 'react'
import { TrendLocationV1 } from 'twitter-api-v2'
import SearchResultsItem from './searchResultsItem'
import { useStore } from '../../stores/store'

/**
 * Component props
 * @memberof Search
 */
type PropsSearch = {
    /** List of locations */
    locations: TrendLocationV1[],
    /** Search select event */
    searchHandler?: (place: TrendLocationV1 | null) => void
}

/**
 * This callback is displayed as part of the Requester class.
 * @memberof Search
 * @callback searchHandler
 * @param {TrendLocationV1 | null} place object from twitter api
 * @returns {void}
 */

/**
 * Search component including input with search results
 * @namespace
 * @category Components
 * @param {function} [searchHandler] - Emitted when the user has selected a location from search results
 * @returns {JSX.Element} JSX Element
 * @example
 *
 * const clickHandler = (place: TrendLocationV1 | null): void => {
 * console.log(place)
 * }
 *
 * <Search searchHandler="clickHandler" />
 */
const Search = ({ locations, searchHandler }: PropsSearch) => {
  const [results, setResults] = useState<TrendLocationV1[]>([])
  const [showResults, setShowResults] = useState(false)
  const { searchValue, setSearchValue } = useStore()
  const searchEl = useRef<HTMLDivElement>(null)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    findPlaces(e.target.value)
    if (searchHandler && e.target.value === '') searchHandler(null)
  }

  const focusHandler = (e: React.MouseEvent) => {
    findPlaces(searchValue)
  }
  const clickItemHandler = (e: React.MouseEvent, woeid: number) => {
    const place = locations.find(l => l.woeid === woeid)
    if (place) {
      setSearchValue(place.name)
      if (searchHandler) searchHandler(place)
    }
    setShowResults(false)
    setTimeout(() => {
      setResults([])
    }, 300)
  }

  const findPlaces = (searchValue: string) => {
    if (searchValue) {
      setResults(locations.filter(l => l.name.toLowerCase().includes(searchValue.toLowerCase())))
      setShowResults(true)
    } else {
      setShowResults(false)
      setTimeout(() => {
        setResults([])
      }, 300)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchEl && searchEl.current && !searchEl.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  useEffect(() => {
    // findPlaces(searchValue)
  }, [searchValue])
  const hide = showResults ? ` ${styles['search__results--show']}` : ''

  return (
    <div ref={searchEl} className={styles.search__inner}>
      <input
        data-testid='input'
        title='Search'
        className={styles.search__input}
        type='text'
        placeholder='Type location...'
        onChange={changeHandler}
        value={searchValue}
        onClick={focusHandler}
      />
      <div data-testid='results' className={styles.search__results + hide}>
        {results.length > 0 &&
             results.map(r =>
               <SearchResultsItem key={r.woeid} item={r} clickHandler={clickItemHandler} />
             )}
      </div>
    </div>
  )
}

export default Search
