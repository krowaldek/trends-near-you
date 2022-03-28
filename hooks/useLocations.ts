import axios from 'axios'
import { useQuery } from 'react-query'
import { TrendLocationV1 } from 'twitter-api-v2'
import { getLocationsApi } from '../api/config'

const useLocations = () => {
  const getLocations = async () => {
    return (await (axios.get<TrendLocationV1[]>(getLocationsApi()))).data
  }

  return useQuery(['locations'], getLocations)
}
export default useLocations
