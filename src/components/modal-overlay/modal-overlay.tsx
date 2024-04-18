import style from './modal-overlay.module.css'
import { TModalOverlay } from '../../constant/types'
import { FC } from 'react'

export const ModalOverlay: FC<TModalOverlay> = ({ onClose }) => {
  return <div onClick={onClose} className={style.backDrop} />
}
