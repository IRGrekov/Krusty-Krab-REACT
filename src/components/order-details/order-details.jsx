import style from './order-details.module.css'
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from 'react-redux'

export function OrderDetails() {
  const number = useSelector((state) => state.orderDetails.id)
  return (
    <div className={style.orderDetails}>
      <div className="text_type_digits-large">{number}</div>
      <div className="text text_type_main-medium pt-8">
        идентификатор заказа
      </div>
      <div className="pt-15 pb-15">
        <CheckMarkIcon />
      </div>
      <div className="pb-2 text text_type_main-default">
        Ваш заказ начали готовить
      </div>
      <div className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </div>
    </div>
  )
}
