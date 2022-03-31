import styles from './styles.module.scss'
import React from 'react'
import { MdClose } from 'react-icons/md'

/**
 * Component props
 * @memberof Modal
 */
type PropsModal = {
    isShow: boolean,
    title?: string,
    children: React.ReactNode
    handleClose: (e: React.MouseEvent) => void
}
/**
 * Modal dialog window
 * @namespace
 * @category Components
 * @param {boolean} isShow - Show modal window
 * @param {string} [title] - Modal window title
 * @param {string} children - Modal window children
 * @param {function} handleClose - Event emitted when close modal window
 * @returns {JSX.Element} JSX Element
 */
const Modal = ({ isShow, title, handleClose, children }: PropsModal) => {
  const isShowClass = isShow ? styles.modal__show : ''
  return (
    <div className={`${styles.modal} ${isShowClass}`}>
      <div className={styles.modal__container}>
        <div className={styles.modal__header}>
          <div className={styles.modal__close}><MdClose onClick={handleClose} /></div>
          <div className={styles.modal__title}>{title}</div>
          {children}
        </div>
      </div>
    </div>
  )
}
export default Modal
