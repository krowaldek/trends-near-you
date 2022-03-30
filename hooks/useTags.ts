import axios from 'axios'
import * as R from 'ramda'
import { useQuery } from 'react-query'
import { TrendMatchV1, TrendV1 } from 'twitter-api-v2'
import { getTrendsApi } from '../api/config'
import { tag } from '../components/tagsCloud/tag'

/**
 * The complete Triforce, or one or more components of the Triforce.
 * @typedef {Object} UseQueryResult
 * @property {boolean} hasCourage - Indicates whether the Courage component is present.
 * @property {boolean} hasPower - Indicates whether the Power component is present.
 * @property {boolean} hasWisdom - Indicates whether the Wisdom component is present.
 */

/**
 *  Hook for getting trends from twitter API
 * @namespace useTags
 * @method
 * @category Hooks
 * @param {string} location
 * @returns {UseQueryResult} React query object
 */
const useTags = (location: string) => {
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
 * @memberof useTags
 * @function combineTrends
 * @param {TrendMatchV1} trends - list of trends
 * @returns {TrendV1} array of trends
 */
const combineTrends = (trends: TrendMatchV1[]) => {
  return R.reduce<TrendMatchV1, TrendV1[]>((acc, trend) => [...acc, ...trend.trends], [], trends)
}

const mapToTags = (trends: TrendV1[]) => {
  return R.map<TrendV1, tag>((trend: TrendV1): tag => ({
    name: trend.name,
    value: trend.tweet_volume,
    query: trend.query
  }), trends)
}
