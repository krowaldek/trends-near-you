const ENDPOINT = 'api/'
const API = {
  LOCATIONS: 'locations',
  TWEETS: 'tweets',
  TRENDS: 'trends'
}
const getApi = (endpoint:string) => `${ENDPOINT}${endpoint}`

export const getLocationsApi = () => getApi(API.LOCATIONS)
export const getTweetsApi = (query:string, origin: string, sinceId?:number) => {
  const sinceIdParameter = sinceId ? `/${sinceId}` : ''
  return `${origin}/${getApi(API.TWEETS)}/${query}${sinceIdParameter}`
}
export const getTrendsApi = (woeid:string) => `${getApi(API.TRENDS)}/${woeid}`
