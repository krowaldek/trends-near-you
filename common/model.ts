/**
 * @namespace model
 * @category Model
 */
export const moduleName = 'model'

/**
 * @memberof model
 */
export type Trend = {
  /** Name of the search result */
  'name': string,
   /** Url of the tagged tweets  */
  'url': string,
   /** Query to search for tweets  */
  'query': string[],
   /** Volume of tagged tweets  */
 'tweet_volume': string | null
}
/**
 * @memberof model
 */
export type SearchResult = {
   /** Name of the search result */
  'name': string,
   /** Url of the tagged tweets  */
  'url': string,
   /** Query to search for tweets  */
  'query': string[],
   /** Volume of tagged tweets  */
 'tweet_volume': string | null
}

/**
 * Tag model
 * @memberof model
 * @alias TagModel
 */
export type Tag = {
    /** Display name  */
    name: string,
     /** Number of tagged tweets */
    value: number | null,
     /** Query to search for tweets  */
    query: string
}
