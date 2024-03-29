import style from '../burger-constructor/burger-constructor.module.css'
import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'

export function ConfirmationOrder({ handleOrderClick }) {
  const buns = useSelector((state) => state.burgerConstructor.bunsList)
  const main = useSelector((state) => state.burgerConstructor.mainList)

  const allPrice =
    buns.reduce((el, { price }) => el + price, 0) * 2 +
    main.reduce((el, { price }) => el + price, 0)

  return (
    <div className={`${style.order} pt-10`}>
      <div className="text text_type_digits-medium">{allPrice}</div>
      <div className="pl-1">
        <CurrencyIcon type="primary" />
      </div>
      <div className="pl-10">
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          onClick={handleOrderClick}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}
