import { TweetV1 } from 'twitter-api-v2'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { format, render, cancel, register } from 'timeago.js'
import ReactHtmlParser from 'react-html-parser'


/**
 * Component props
 * @memberof Tag
 */
type PropsTweet = {
    /** Tweet object   */
    tweet: TweetV1
}

enum mediaGridClass { 
    'media--one'= 1,
    'media--two',
    'media--three',
    'media--four',
}

/**
 * Component show single tweet.
 * @namespace
 * @category Components
 * @param tweet
 * @returns {JSX.Element} JSX Element
 */
const Tweet = ({ tweet }: PropsTweet) => {
    const [isTruncated, setIsTruncated] = useState(tweet.truncated)

    const mediaLength = tweet.extended_entities && tweet.extended_entities.media 
    ? tweet.extended_entities.media.slice(0, 3).length 
    : 0
    const mediaClasses = tweet.extended_entities && tweet.extended_entities.media 
    ? `${styles.media} ${styles[mediaGridClass[mediaLength]]}` 
    : styles.media
    /**
     * Catch links and hashtags and add markups for them.
     * @memberof Tweet
     * @param text 
     */
    const textMarkup = (text: string) => {
        let regexp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
        const links = text.match(regexp)
        if (links) {
            links.forEach(link => {
                text = text.replace(link, `<a href="${link}" class=${styles.link} target="_blank">${link}</a>`)
            })
        }
        regexp = /(^|\s)(#[a-z\d-]+)/ig
        const hashtags = text.match(regexp)
        if (hashtags) {
            hashtags.forEach(hashtag => {
                const hashtagName = hashtag.replace('#', '')
                text = text.replace(hashtag, `<a href="https://twitter.com/hashtag/${hashtagName}?src=hash" class=${styles.link} target="_blank">${hashtag}</a>`)
            })
        }
        return text
    }

    const favoriteCount = tweet.retweeted_status ? tweet.retweeted_status.favorite_count : tweet.favorite_count

  return (
    <div className={styles.tweet}>
      <div className={styles.inner__avatar}>
          <Image
            src={tweet.user.profile_image_url_https} alt='' width={48}
            height={48} className={styles.avatar}
          />
      </div>
      <div className={styles.header}>
        <div className={styles.author}>{tweet.user.screen_name}</div>
        <div className={styles.username}>@{tweet.user.name}</div>
        <div className={styles.addDate}>- {format(tweet.created_at, 'en_US')}</div>
      </div>
      <div className={styles.content}>
          {ReactHtmlParser(textMarkup(tweet.text))}
      </div>
      <div className={mediaClasses}>
        {tweet.extended_entities && tweet.extended_entities.media && tweet.extended_entities.media.slice(0, 3).map((media, index) => {
          return (
                <Image
                  key={media.id}
                  src={media.media_url_https} alt='' 
                  width='100%' 
                  height={mediaLength === 2 ? 100 : 50} 
                  layout='responsive' 
                  objectFit='cover' 
                  objectPosition='center' 
                />
          )
        })}
      </div>
      <div className={styles.controls}>
      <div className={styles.control}>
          <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>
          <div>{tweet.retweet_count}</div>
      </div>
      <div className={styles.control}>
          <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>
          <div>{favoriteCount}</div>
      </div>
      </div>
    </div>
  )
}
export default Tweet



