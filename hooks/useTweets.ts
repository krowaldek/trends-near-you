import axios from 'axios'
import { useQuery } from 'react-query'
import { getTweetsApi } from '../api/config'

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
const useTweets = (query: string) => {
  const getTweets = async () => {
    if (query) return (await axios.get(window.location.origin + '/' + getTweetsApi(query))).data.statuses
    else return []
  }
  return useQuery(['tweets', query], getTweets
  )
}
export default useTweets
