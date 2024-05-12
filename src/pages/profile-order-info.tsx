import { useEffect } from 'react'
import styles from './pages.module.css'
import {
  wsConnectionStartUser,
  wsConnectionClosedUser,
} from '../services/actions/websockets'
import { Order } from '../components/order/order'
import { useAppDispatch } from '../utils/hooks'
import { getCookie } from '../utils/cookie'

export const ProfileOrderInfo = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(wsConnectionStartUser(`?token=${getCookie('access')}`))
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
