const API = {
  KEY: 'AAAAAAAAAAAAAAAAAAAAAN%2BnXAEAAAAAwxIFRRsK5z0d2UesilL8TDP4P%2Fs%3DPLQROEC7HciY9ahUgLGZDDHggQsE25bLo8k5TdQ3i6JIO11Egb',
  URL: 'https://api.twitter.com/1.1/',
  TWEETS: 'search/tweets.json'
}

export const getApiKey = () => API.KEY
export const getApiUrl = () => API.URL
export const getSearchTweetsApi = (query: string) => `${API.URL}${API.TWEETS}?q=${query}`
