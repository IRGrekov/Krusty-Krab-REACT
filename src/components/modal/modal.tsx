import ReactDOM from 'react-dom'
import React, { FC } from 'react'
import style from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ModalOverlay } from '../modal-overlay/modal-overlay'
import { TModal } from '../../constant/types'

const modalRoot = document.getElementById('react-modals') as HTMLDivElement

export const Modal: FC<TModal> = ({ header, children, onClose }) => {
  React.useEffect(() => {
    const keyDown = (event: KeyboardEvent) => {
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
          <div className={style.closeButtonContainer}>
            <CloseIcon
              data-testid="modal-close-button"
              type="primary"
              onClick={onClose}
            />
          </div>
        </div>
        {children}
      </div>
    </>,
    modalRoot
  )
}
