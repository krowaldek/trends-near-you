import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { TrendLocationV1 } from 'twitter-api-v2'
import { Tag } from '../common/model'

import Search from '../components/search'
import TagsCloud from '../components/tagsCloud'

import useTags from '../hooks/useTags'
import { useStore } from '../stores/store'

import logo from '../assets/img/logo-white.png'
import locationsService from '../services/locations'
function HomePage ({ locations }: { locations: TrendLocationV1[]}) {
  const { location, setLocation } = useStore()
  const { tags, setTags } = useStore()
  const router = useRouter()
  // eslint-disable-next-line no-unused-vars
  const { status, data, refetch } = useTags(location)

  const searchHandler = (location: TrendLocationV1 | null) => {
    if (location) setLocation(`${location.woeid}`)
    else setLocation('')
  }

  useEffect(() => {
    console.log('trends', data)
    console.log('locations', locations)
    if (data) setTags(data)
  }, [data])

  const onClickHandler = (tag: Tag) => {
    router.push(`/trend/${tag.query}`)
  }

  return (
    <div className='App'>
      <div className='app__search__container'>
        <div className='app__logo'>
          <Image src={logo} />
        </div>
        <div className='app__search'>
          <Search locations={locations} searchHandler={searchHandler} />
        </div>
        <div className='app__tags'>
          <TagsCloud tags={tags} clickHandler={onClickHandler} />
        </div>
      </div>
    </div>
  )
}

export default HomePage

export async function getServerSideProps () {
  return { props: { locations: await locationsService() } }
}
