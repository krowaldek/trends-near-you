/**
 * @namespace model
 * @category Model
 */
export const name = 'model'

/**
 * @memberof model
 */
export type Trend = {
   'name': string,
   'url': string,
   'query': string[],
  'tweet_volume': string | null
}
/**
 * @memberof model
 */
export type SearchResult = {
  'name': string,
  'url': string,
  'query': string[],
 'tweet_volume': string | null
}

/**
 * Tag model
 * @memberof model
 */
export type Tag = {
  /** Display name  */
    name: string,
     /** Number of tagged tweets */
    value: number | null,
     /** Query to search for tweets  */
    query: string
}
