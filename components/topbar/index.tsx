import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './styles.module.scss'
import backButton from '../../assets/img/back.png'

/**
 * Component props
 * @memberof Tag
 */
type PropsTopbar = {
    /** Title  */
    title: string
}

/**
 * Top bar with back button.
 * @namespace
 * @category Components
 * @param title {string} Title
 * @returns {JSX.Element} JSX Element
 */
const Topbar = ({ title }: PropsTopbar) => {
  const router = useRouter()
  const backHandler = () => {
    router.push('/', undefined, { shallow: true })
  }
  return (
    <div className={styles.topbar}>
      <div className={styles.back}>
        <Link href='/'>
          <a>
            <Image src={backButton} width={30} height={30} alt='back' />

          </a>
        </Link>
      </div>
      <p className={styles.title} role='title'>{title}</p>
    </div>
  )
}
export default Topbar
