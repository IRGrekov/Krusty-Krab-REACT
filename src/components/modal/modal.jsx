import React from 'react'
import ReactDOM from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ModalOverlay } from '../modal-overlay/modal-overlay'
import PropTypes from 'prop-types'
import style from './modal.module.css'

const modalRoot = document.getElementById('react-modals')

export function Modal({ header, children, onClose }) {
  React.useEffect(() => {
    const keyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', keyDown)

    return () => {
      document.removeEventListener('keydown', keyDown)
    }
  }, [])

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={`${style.modal} p-10`}>
        <div className={style.topPart}>
          <div className="text text_type_main-large">{header}</div>
          <div>
            <CloseIcon type="primary" onClick={onClose} />
          </div>
        </div>
        {children}
      </div>
    </>,
    modalRoot
  )
}