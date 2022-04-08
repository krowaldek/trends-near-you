import { MediaEntityV1, TweetV1 } from 'twitter-api-v2'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import Tweet from '../tweet'
import Viewer from '../viewer'

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
  const [isShowViewer, setIsShowViewer] = useState(false)
  const [tweetMedia, setTweetMedia] = useState<MediaEntityV1[]>([])

  const closeViewerModal = () => {
    setIsShowViewer(false)
  }
  const showViewerModal = (media: MediaEntityV1[]) => {
    setIsShowViewer(true)
    setTweetMedia(media)
  }
  return (
    <>
      <div className={styles.tweets}>
        {tweets.map(tweet => {
          return (
            <div
              key={tweet.id_str}
              className={styles.tweet}
            >
              <Tweet tweet={tweet} mediaHandler={showViewerModal} />
            </div>
          )
        })}
      </div>
      <span className={styles.fetch}>
        <span onClick={fetchMore}>Show more Tweets</span>
      </span>
      <Viewer media={tweetMedia} isShow={isShowViewer} handleClose={closeViewerModal} />
    </>
  )
}
export default Tweets
