import styles from './pages.module.css'
import { ProfileForm } from '../components/profile-form/profile-form'
import { useEffect } from 'react'
import {
  wsConnectionClosedUser,
  wsConnectionStartUser,
} from '../services/actions/websockets'
import { OrderHistory } from '../components/order-history/order-history'
import { useAppDispatch } from '../utils/hooks'

export function ProfileOrders() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(wsConnectionStartUser())
    return () => {
      dispatch(wsConnectionClosedUser())
    }
  }, [])

  return (
    <section className={styles.profile}>
      <ProfileForm />
      <OrderHistory />
    </section>
  )
}
