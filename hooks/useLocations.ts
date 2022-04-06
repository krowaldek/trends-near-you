import { useQuery } from 'react-query'
import locations from '../services/locations'

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
  return useQuery(['locations'], locations)
}
export default useLocations
