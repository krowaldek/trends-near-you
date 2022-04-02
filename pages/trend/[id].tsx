import { useRouter } from 'next/router'
import React from 'react'
import Tweet from '../../components/tweet'
import useTweets from '../../hooks/useTweets'

function Trend () {
  const router = useRouter()
  const { id } = router.query
  let query = ''
  if (typeof id === 'string') {
    query = id
  }
  const { data, status } = useTweets(query)
  if (typeof id === 'string') {
    if (status === 'loading') {
      return <div>Loading...</div>
    }
    if (status === 'error') {
      return <div>Error</div>
    }
    if (data) {
      return (
        <div>
          <Tweet tweet={data[0]} />
        </div>
      )
    }
  }
  return <div>404</div>
}

export default Trend
