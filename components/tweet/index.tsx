import { TweetV1 } from 'twitter-api-v2'
import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'

/**
 * Component props
 * @memberof Tag
 */
type PropsTweet = {
    /** Tweet object   */
    tweet: TweetV1
}

/**
 * Component show single tweet.
 * @namespace
 * @category Components
 * @param tweet
 * @returns {JSX.Element} JSX Element
 */
const Tweet = ({ tweet }: PropsTweet) => {
  return (
    <div className={styles.tweet}>
      <Image
        src={tweet.user.profile_image_url_https} alt='' width={48}
        height={48} className={styles.avatar}
      />
      <div className={styles.header}>
        <div className={styles.author}>{tweet.user.screen_name}</div>
        <div className={styles.username}>@{tweet.user.name}</div>
        <div className={styles.addDate}>- {tweet.created_at}</div>
      </div>
      <div className={styles.content}>
        {tweet.text}
      </div>
      <div className={styles.media} />
      <div className={styles.controls} />
    </div>
  )
}
export default Tweet
