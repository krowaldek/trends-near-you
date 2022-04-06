import { TwitterApi } from 'twitter-api-v2'
import { getApiKey } from '../pages/api/config'

const locationsService = async () => {
  const twitterClient = new TwitterApi(getApiKey()).readOnly
  const locations = await twitterClient.v1.trendsAvailable()

  return locations
}
export default locationsService
