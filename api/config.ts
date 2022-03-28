const ENDPOINT = 'api/'
const API = {
  LOCATIONS: 'locations',
  TRENDS: 'trends'
}
const getApi = (endpoint:string) => `${ENDPOINT}${endpoint}`

export const getLocationsApi = () => getApi(API.LOCATIONS)
export const getTrendsApi = (woeid:string) => `${getApi(API.TRENDS)}/${woeid}`
