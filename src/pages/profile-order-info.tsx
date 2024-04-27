import { useEffect } from 'react'
import styles from './pages.module.css'
import {
  wsConnectionStartUser,
  wsConnectionClosedUser,
} from '../services/actions/websockets'
import { Order } from '../components/order/order'
import { useAppDispatch } from '../utils/hooks'

export const ProfileOrderInfo = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(wsConnectionStartUser())
    return () => {
      dispatch(wsConnectionClosedUser())
    }
  }, [])

  return (
    <div className={styles.info}>
      <Order />
    </div>
  )
}

