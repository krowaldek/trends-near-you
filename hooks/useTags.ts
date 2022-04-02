import axios from 'axios'
import * as R from 'ramda'
import { useQuery } from 'react-query'
import { TrendMatchV1, TrendV1 } from 'twitter-api-v2'
import { getTrendsApi } from '../api/config'
import { Tag } from '../common/model'

/**
 * @module useTags
 * @category Hooks
 * @desc Hook for getting trends from twitter API
 */

/**
 *  Hook for getting trends from twitter API
 * @param {string | null} location
 * @returns {UseQueryResult} React-Query object
 */
const useTags = (location: string | null) => {
  const getTrends = async () => {
    if (location) return (await axios.get<TrendMatchV1[]>(getTrendsApi(location))).data
    else return []
  }
  return useQuery(['trends', location], getTrends,
    {
      select: processResponse()
    }
  )
}
export default useTags

const processResponse = () => {
  return R.pipe(
    combineTrends,
    mapToTags
  )
}
/**
 * Remove one level of nesting array of Twitter API response
 * @method
 * @category Hooks
 * @param {TrendMatchV1} trends - list of trends
 * @returns {TrendV1} array of trends
 */
const combineTrends = (trends: TrendMatchV1[]) => {
  return R.reduce<TrendMatchV1, TrendV1[]>((acc, trend) => [...acc, ...trend.trends], [], trends)
}
/**
 * Map TrendsV1 to Tag
 * @category Hooks
 * @method
 * @param {TrendMatchV1[]} array of trends from Twitter API
 * @returns {Tag[]} array of tags
 */
const mapToTags = (trends: TrendV1[]) => {
  return R.map<TrendV1, Tag>((trend: TrendV1): Tag => ({
    name: trend.name,
    value: trend.tweet_volume,
    query: trend.query
  }), trends)
}
