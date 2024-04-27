import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { FC, useMemo } from 'react'
import { TOrderRegistration } from '../../constant/types'
import { useAppSelector } from '../../utils/hooks'

export const ConfirmationOrder: FC<TOrderRegistration> = ({
  handleOrderClick,
}) => {
  const buns = useAppSelector((state) => state.burgerConstructor.bunsList)
  const main = useAppSelector((state) => state.burgerConstructor.mainList)

  const allPrice = useMemo(
    () =>
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
