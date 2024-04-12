import { useSelector } from 'react-redux'
import { BurgerIngredientsEl } from '../burger-ingredients-item/burger-ingredients-item'
import PropTypes from 'prop-types'
import { TBurgerIngredientsSet, TIngredientType } from '../../constant/types'
import { FC } from 'react'

export const BurgerIngredientsSet: FC<TBurgerIngredientsSet> = ({ type }) => {
  const ingredients = useSelector(
    (state: any) => state.burgerIngredients.burgerIngredients
  )
  return (
    <>
      {ingredients
        .filter((ingredient: TIngredientType) => ingredient.type === type)
        .map((ingredient: TIngredientType) => (
          <BurgerIngredientsEl key={ingredient._id} ingredient={ingredient} />
        ))}
    </>
  )
}

BurgerIngredientsSet.propTypes = {
  type: PropTypes.string.isRequired,
}
