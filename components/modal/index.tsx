import styles from './styles.module.scss'
import React from 'react'
import { MdClose } from 'react-icons/md'

interface PropsModal {
    isShow: boolean,
    title?: string,
    children: React.ReactNode
    handleClose: (e: React.MouseEvent) => void
}
const Modal = (props: PropsModal) => {
  const isShow = props.isShow ? styles.modal__show : ''
  return (
    <div className={`${styles.modal} ${isShow}`}>
      <div className={styles.modal__container}>
        <div className={styles.modal__header}>
          <div className={styles.modal__close}><MdClose onClick={props.handleClose} /></div>
          <div className={styles.modal__title}>{props.title}</div>
          {props.children}
        </div>
      </div>
    </div>
  )
}
export default Modal
