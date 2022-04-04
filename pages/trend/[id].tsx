import { GetServerSidePropsContext } from 'next'
import React from 'react'
import { TweetV1 } from 'twitter-api-v2'
import Tweet from '../../components/tweet'
import tweetsService from '../../services/tweets'

function Trend ({ data }: { data: TweetV1[] }) {
  if (data) {
    return (
      <div>
        {data.map(tweet => {
          return <Tweet key={tweet.id_str} tweet={tweet} />
        })}
      </div>
    )
  }
}

export default Trend

export async function getServerSideProps ({ query }: GetServerSidePropsContext) {
  const { id } = query
  if (typeof id === 'string') {
    const data = await tweetsService(id)
    return { props: { data } }
  } else {
    return { props: { data: [] } }
  }
}
