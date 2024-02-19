import React, { useState } from 'react'
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { propTypes } from '../../constant/propTypes'
import style from './burger-ingredients-item.module.css'

export function BurgerIngredientsEl({ ingredient }) {
  const [count, setCount] = useState(1)

  // const handleCounterClick = () => {
  //     setCount(count + 1);
  // };

  return (
    <div className={style.mainDiv}>
      <Counter
        count={count}
        size="default"
        // onClick={handleCounterClick}
      />
      <img src={ingredient.image} alt={ingredient.name} />
      <div className={style.money}>
        <div className="text text_type_digits-default">{ingredient.price}</div>
        <div className="pl-2">
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <div className="pt-1 text text_type_main-small">{ingredient.name}</div>
    </div>
  )
}

BurgerIngredientsEl.propTypes = {
  ingredient: propTypes.isRequired,
}
