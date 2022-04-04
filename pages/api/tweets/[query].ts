import type { NextApiRequest, NextApiResponse } from 'next'
import tweetsService from '../../../services/tweets'
/**
 * Tweets search endpoint
 * @module /tweets/[query]
 * @category API
 * @subcategory GET
 * @param {string} query - Search query
 * @returns {Tweets} JSON object with tweets
 */
export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const query = req.query.query
  if (typeof query === 'string') {
    try {
      res.send(JSON.stringify(await tweetsService(query)))
    } catch (err) {
      res.send(JSON.stringify(err))
    }
  } else {
    res.send({ error: true, message: 'Wrong parameters' })
  }
}
