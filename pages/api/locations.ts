import type { NextApiRequest, NextApiResponse } from 'next'
import locationsService from '../../services/locations'
/**
 * Locations endpoint
 * @module /locations
 * @category API
 * @subcategory GET
 * @returns {TrendLocationV1} JSON object with locations
 */
export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  try {
    const locations = await locationsService()
    res.send(JSON.stringify(locations))
  } catch (err) {
    res.send(JSON.stringify(err))
  }
}
