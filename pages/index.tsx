import React, { useEffect } from 'react'
import { TrendLocationV1 } from 'twitter-api-v2'

import Search from '../components/search'
import TagsCloud from '../components/tagsCloud'

import useTags from '../hooks/useTags'
import { useStore } from '../stores/store'

function HomePage () {
  const { location, setLocation } = useStore()

  // eslint-disable-next-line no-unused-vars
  const { status, data, error } = useTags(location)

  const searchHandler = (location: TrendLocationV1) => {
    if (location) setLocation(`${location.woeid}`)
    else setLocation(null)
  }

  useEffect(() => {
    console.log('trends', data)
  }, [data])

  return (
    <div className='App'>

      <div className='app__search__container'>
        <div className='app__search'>
          <Search searchHandler={searchHandler} />
        </div>
        <div className='app__tags'>
          <TagsCloud tags={data || []} />
        </div>
      </div>

    </div>
  )
}

export default HomePage
