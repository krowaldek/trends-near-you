import { TweetV1 } from 'twitter-api-v2'
import React from 'react'
import styles from './styles.module.scss'
import Tweet from '../tweet'

/**
 * Component props
 * @memberof Tweets
 */
type PropsTweets = {
    /** List of Tweets  */
    tweets: TweetV1[],
    /** Event emitted when fetch more data is need */
    fetchMore: () => void
}

/**
 * Component show single tweet.
 * @namespace
 * @category Components
 * @param tweets {TweetV1[]} tweets - List of Tweets
 * @returns {JSX.Element} JSX Element
 */
const Tweets = ({ tweets, fetchMore }: PropsTweets) => {
  return (
    <>
      <div className={styles.tweets}>
        {tweets.map(tweet => {
          return (
            <div
              key={tweet.id_str}
              className={styles.tweet}
            >
              <Tweet tweet={tweet} />
            </div>
          )
        })}
      </div>
      <span className={styles.fetch}>
        <span onClick={fetchMore}>Show more Tweets</span>
      </span>
    </>
  )
}
export default Tweets
