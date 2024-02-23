import React from 'react'
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { ingredientPropType } from '../../constant/propTypes'
import PropTypes from 'prop-types'
import style from './burger-constructor.module.css'

export function BurgerConstructor({ ingredients, handleOrderClick }) {
  return (
    <div className={style.listIng}>
      <div className="pl-7">
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
        />
      </div>
      <div className={style.centralIng}>
        {ingredients.map((ingredient) => (
          <div className={style.centralIngEl} key={ingredient._id}>
            <DragIcon type="primary" />
            <div className={`${style.constructorElementContainer} pr-1 pl-1`}>
              <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="pl-7">
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
        />
      </div>
      <div className={`${style.order} pt-10`}>
        <div className="text text_type_digits-medium">610</div>
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
    </div>
  )
}

// BurgerConstructor.propTypes = {
//   ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
// }
