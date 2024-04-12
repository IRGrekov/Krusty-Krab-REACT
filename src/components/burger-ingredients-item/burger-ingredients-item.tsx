import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import style from './burger-ingredients-item.module.css'
import { ingredientPropType } from '../../constant/propTypes'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { addIngredientDetails } from '../../services/actions/ingredient-details'
import { useDrag } from 'react-dnd'
import { TBurgerIngredientsItem, TIngredientType } from '../../constant/types'
import { FC } from 'react'

export const BurgerIngredientsEl: FC<TBurgerIngredientsItem> = ({
  ingredient,
}) => {
  const location = useLocation()

  const buns = useSelector((state: any) => state.burgerConstructor.bunsList)
  const main = useSelector((state: any) => state.burgerConstructor.mainList)

  const counter =
    buns.filter((item: TIngredientType) => item._id === ingredient._id).length *
      2 ||
    main.filter((item: TIngredientType) => item._id === ingredient._id).length

  const dispatch = useDispatch()

  const handleIngredientClick = (ingredient: TIngredientType) => {
    dispatch(addIngredientDetails(ingredient))
  }

  const [, drag] = useDrag(() => ({
    type: 'ingredient',
    item: {
      ingredient,
      id: ingredient._id,
      type: ingredient.type,
    },
  }))

  // const handleCounterClick = () => {
  //     setCount(count + 1);
  // };

  return (
    <div
      className={style.mainDiv}
      onClick={() => handleIngredientClick(ingredient)}
      ref={drag}
    >
      <Link
        to={`/ingredients/${ingredient._id}`}
        state={{ backgroundLocation: location }}
        className={`${style.link} text text_type_main-default`}
      >
        <Counter count={counter} size="default" />
        <img src={ingredient.image} alt={ingredient.name} />
        <div className={style.money}>
          <div className="text text_type_digits-default">
            {ingredient.price}
          </div>
          <div className="pl-2">
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <div className="pt-1 text text_type_main-small">{ingredient.name}</div>
      </Link>
    </div>
  )
}

BurgerIngredientsEl.propTypes = {
  ingredient: ingredientPropType.isRequired,
}
