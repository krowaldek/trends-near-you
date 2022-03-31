import type { NextApiRequest, NextApiResponse } from 'next'
import { TwitterApi } from 'twitter-api-v2'
import { getApiKey } from './config'
/**
 * Location endpoint
 * /location
 * @module /locations
 * @category API
 * @subcategory GET
 * @returns {TrendLocationV1} JSON object with locations
 */
export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  try {
    const twitterClient = new TwitterApi(getApiKey()).readOnly
    const locations = await twitterClient.v1.trendsAvailable()
    res.send(JSON.stringify(locations))
  } catch (err) {
    res.send(JSON.stringify(err))
  }
}
