import type { NextApiRequest, NextApiResponse } from 'next'
import { TwitterApi } from 'twitter-api-v2'
import { getApiKey } from '../config'
/**
 * Trends search endpoint
 * @module /trends/[woeid]
 * @category API
 * @subcategory GET
 * @param {string} woeid - Where on earth ID
 * @returns {TrendsMatchV1} JSON object with trends
 */
export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const woeid = req.query.woeid
  if (typeof woeid === 'string') {
    try {
      const twitterClient = new TwitterApi(getApiKey()).readOnly
      const trends = await twitterClient.v1.trendsByPlace(woeid)
      res.send(JSON.stringify(trends))
    } catch (err) {
      res.send(JSON.stringify(err))
    }
  } else {
    res.send({ error: true, message: 'Wrong parameters' + JSON.stringify(woeid) })
  }
}
