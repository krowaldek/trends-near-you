import { MediaEntityV1 } from 'twitter-api-v2'
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import Modal from '../modal'

/**
 * Component props
 * @memberof Viewer
 */
type PropsViewer = {
    /** List of media entities  */
    media: MediaEntityV1[],
    /** Show viewer modal  */
    isShow: boolean,
    /** Likes count */
    likes?: number,
    /** Retweet count */
    retweet?: number,
     /** Event emitted when user close viewer */
    handleClose?: (e: React.MouseEvent) => void
}

/**
 * Tweet media viewer modal.
 * @namespace
 * @category Components
 * @param media {MediaEntityV1[]} media - List of Tweets
 * @param show {boolean} show - Show viewer modal
 * @param likes {number} likes - Likes count
 * @param retweet {number} retweet - Retweet count
 * @param handleClose {function} handleClose - Event emitted when user close viewer
 * @returns {JSX.Element} JSX Element
 */
const Tweets = ({ media, isShow, likes, retweet, handleClose }: PropsViewer) => {
  return (
    <Modal isShow={isShow} handleClose={handleClose}>
      <div className={styles.media}>
        {media.map(media => {
          return (
            <div
              key={media.id}
              className={styles.image}
              data-testid='media'
            >
              <Image src={media.media_url_https} alt='' objectFit='contain' layout='fill' />
            </div>
          )
        })}
      </div>
    </Modal>
  )
}
export default Tweets
