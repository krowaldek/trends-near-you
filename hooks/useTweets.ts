import axios from 'axios'
import { useQuery } from 'react-query'
import { TweetV1 } from 'twitter-api-v2'
import { getTweetsApi } from '../webapi/config'

/**
 * @module useTweets
 * @category Hooks
 * @desc Hook for getting tweets from twitter API based on query
 */

/**
 * Hook for getting tweets from twitter API based on query
 * @param {string} query
 * @returns {UseQueryResult} React-Query object
 */
const useTweets = (query: string, maxId: number, origin: string) => {
  const getTweets = async () => {
    if (query) return (await axios.get(getTweetsApi(query, origin, maxId))).data as TweetV1[]
    else return []
  }
  return useQuery(['tweets', query, maxId], getTweets)
}
export default useTweets
