import style from '../burger-constructor/burger-constructor.module.css'
import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from 'react-redux'
import { FC, useMemo } from 'react'
import { TOrderRegistration } from '../../constant/types'

export const ConfirmationOrder: FC<TOrderRegistration> = ({
  handleOrderClick,
}) => {
  const buns = useSelector((state: any) => state.burgerConstructor.bunsList)
  const main = useSelector((state: any) => state.burgerConstructor.mainList)

  const allPrice = useMemo(
    () =>
      // @ts-ignore
      buns.reduce((el: number, { price }) => el + price, 0) * 2 +
      main.reduce((el: number, { price }) => el + price, 0),
    [buns, main]
  )

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
