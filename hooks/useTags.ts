import axios from 'axios'
import * as R from 'ramda'
import { useQuery } from 'react-query'
import { TrendMatchV1, TrendV1 } from 'twitter-api-v2'
import { getTrendsApi } from '../api/config'
import { tag } from '../components/tagsCloud/tag'

/* kaui2pvzBIY4zvSMaHc4AwScM
xBsswU1u0bbWktYBVi3OF5LUFLZTw8dfsd22YZtswOD9FLeFai
AAAAAAAAAAAAAAAAAAAAAN%2BnXAEAAAAAObwCRm6SEzARS1d6bum0O8U0AQI%3D2P3scjfpioKGWfHJhrRWKv07CcHwYV1PYtQAiwyrOcmdPQGQRl */
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
 * @param trends - list of trends
 * @returns array of trends
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
