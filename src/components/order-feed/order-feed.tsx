import styles from './order-feed.module.css'
import { OrderItem } from '../order-item/order-item'
import { useAppSelector } from '../../utils/hooks'

export function OrderFeed() {
  const orders = useAppSelector((state) => state.webSocket.orders)

  return (
    <section>
      <h2 className="text text_type_main-large mt-10 mb-5">Лента заказов</h2>
      <ul className={`${styles.scroll} pr-2`}>
        {orders.map((order) => (
          <li key={order._id}>
            <OrderItem order={order} />
          </li>
        ))}
      </ul>
    </section>
  )
}
