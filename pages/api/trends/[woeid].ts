import type { NextApiRequest, NextApiResponse } from 'next'
import { getApiKey, getApiUrl } from '../config'
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
      const response = await fetch(`${getApiUrl()}trends/place.json?id=${woeid}`, {
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
      const trends = await response.json()
      res.send(JSON.stringify(trends))
    } catch (err) {
      res.send(JSON.stringify(err))
    }
  } else {
    res.send({ error: true, message: 'Wrong parameters' + JSON.stringify(woeid) })
  }
}
