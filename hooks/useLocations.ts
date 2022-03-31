import axios from 'axios'
import { useQuery } from 'react-query'
import { TrendLocationV1 } from 'twitter-api-v2'
import { getLocationsApi } from '../api/config'

/**
 * @module useLocations
 * @category Hooks
 * @desc Hook for getting locations from twitter API
 */

/**
 *  Hook for getting locations from twitter API
 * @param {string} location
 * @returns {UseQueryResult} React-Query object
 */
const useLocations = () => {
  const getLocations = async () => {
    return (await (axios.get<TrendLocationV1[]>(getLocationsApi()))).data
  }

  return useQuery(['locations'], getLocations)
}
export default useLocations
