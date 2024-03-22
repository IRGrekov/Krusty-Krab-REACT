import { IngredientDetails } from '../components/ingredient-details/ingredient-details'
import style from './pages.module.css'

export function IngredientInfo() {
  return (
    <div className={style.ingredient_details}>
      <IngredientDetails />
    </div>
  )
}
