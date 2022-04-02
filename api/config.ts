const ENDPOINT = 'api/'
const API = {
  LOCATIONS: 'locations',
  TWEETS: 'tweets'
}
const getApi = (endpoint:string) => `${ENDPOINT}${endpoint}`

export const getLocationsApi = () => getApi(API.LOCATIONS)
export const getTweetsApi = (woeid:string) => `${getApi(API.TWEETS)}/${woeid}`
