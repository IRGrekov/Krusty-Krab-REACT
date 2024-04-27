import { BurgerIngredientsEl } from '../burger-ingredients-item/burger-ingredients-item'
import { TBurgerIngredientsSet, TIngredientType } from '../../constant/types'
import { FC } from 'react'
import { useAppSelector } from '../../utils/hooks'

export const BurgerIngredientsSet: FC<TBurgerIngredientsSet> = ({ type }) => {
  const ingredients = useAppSelector(
    (state) => state.burgerIngredients.burgerIngredients
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
