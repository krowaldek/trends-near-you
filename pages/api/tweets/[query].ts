import type { NextApiRequest, NextApiResponse } from 'next'
import { getApiKey, getSearchTweetsApi } from '../config'
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
      const response = await fetch(getSearchTweetsApi(query), {
        method: 'GET',
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getApiKey()}`
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer'
      })
      const tweets = await response.json()
      res.send(JSON.stringify(tweets))
    } catch (err) {
      res.send(JSON.stringify(err))
    }
  } else {
    res.send({ error: true, message: 'Wrong parameters' })
  }
}
