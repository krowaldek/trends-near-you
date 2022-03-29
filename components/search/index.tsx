import useLocations from '../../hooks/useLocations'
import styles from './styles.module.scss'
import React, { useEffect, useRef, useState } from 'react'
import { TrendLocationV1 } from 'twitter-api-v2'
import SearchResultsItem from './searchResultsItem'

interface PropsSearch {
    searchHandler?: (place: TrendLocationV1 | null) => void
}
const Search = ({ searchHandler }: PropsSearch) => {
  const { status, data = [] } = useLocations()
  const [results, setResults] = useState<TrendLocationV1[]>([])
  const [showResults, setShowResults] = useState(false)
  const [searchValue, setSearchValue] = useState('')
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
    const place = data.find(l => l.woeid === woeid)
    if (place) {
      setSearchValue(place.name)
      if (searchHandler) searchHandler(place)
    }
    setShowResults(false)
    setTimeout(() => {
      setResults([])
    }, 300)
  }

  useEffect(() => {
  }, [status])

  const findPlaces = (searchValue: string) => {
    if (searchValue) {
      setResults(data.filter(l => l.name.toLowerCase().includes(searchValue.toLowerCase())))
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
      <input data-testid='input' title='Search' className={styles.search__input} type='text' placeholder='Type location...' onChange={changeHandler} value={searchValue} onClick={focusHandler} />
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