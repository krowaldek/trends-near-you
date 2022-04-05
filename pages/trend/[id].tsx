import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { TweetV1 } from 'twitter-api-v2'
import Topbar from '../../components/topbar'
import Tweets from '../../components/tweets'
import useTweets from '../../hooks/useTweets'
import tweetsService from '../../services/tweets'

function Trend ({ preloadTweets }: { preloadTweets: TweetV1[] }) {
  const router = useRouter()
  const query = typeof router.query.id === 'string' ? router.query.id : ''
  const [maxId, setMaxId] = useState(0)
  const [tweets, setTweets] = useState<TweetV1[]>([])
  useEffect(() => {
    setTweets(() => [...tweets, ...preloadTweets])
  }, [])

  const { data } = useTweets(query, maxId, 'http://localhost:3000')
  const fetchMore = () => {
    setMaxId(() => tweets[tweets.length - 1].id)
  }
  useEffect(() => {
    console.log('data', data)
    // check if maxId is not in default state

    if (data && maxId !== 0) {
      const mergeData = [...tweets, ...data]
      setTweets(() => [...new Map(mergeData.map(item =>
        [item.id, item])).values()] as TweetV1[])
    }
  }, [data])

  if (preloadTweets) {
    return (
      <div>
        <Topbar title={query} />
        <Tweets tweets={tweets} fetchMore={fetchMore} />
      </div>
    )
  }
  return <div>Error</div>
}

export default Trend

export async function getServerSideProps ({ query }: GetServerSidePropsContext) {
  const { id } = query
  if (typeof id === 'string') {
    const preloadTweets = await tweetsService(id)
    return { props: { preloadTweets } }
  } else {
    return { props: { preloadTweets: [] } }
  }
}
