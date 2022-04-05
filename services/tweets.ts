import { getApiKey, getSearchTweetsApi } from '../pages/api/config'

const tweetsService = async (query: string, maxId?: number) => {
  const response = await fetch(getSearchTweetsApi(query, maxId || undefined), {
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
  if (tweets.statuses) {
    return tweets.statuses
  }
  return []
}
export default tweetsService
