import type { NextApiRequest, NextApiResponse } from 'next'
import { TwitterApi } from 'twitter-api-v2'
import { getApiKey } from './config'
export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  try {
    const twitterClient = new TwitterApi(getApiKey()).readOnly
    const locations = await twitterClient.v1.trendsAvailable()
    res.send(JSON.stringify(locations))
  } catch (err) {
    res.send(JSON.stringify(err))
  }
}
