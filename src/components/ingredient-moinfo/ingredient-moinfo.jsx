import { ingredientPropType } from '../../constant/propTypes'
import style from './ingredient-moinfo.module.css'

export function IngredientMoinfo({ ingredient }) {
  return (
    <div className={style.ingredientInfo}>
      <img src={ingredient.image_large} alt={ingredient.name} />
      <div className="text text_type_main-medium pt-4">{ingredient.name}</div>
      <div className={`${style.element} pt-8`}>
        <div>
          <div className="text text_color_inactive text_type_main-default">
            Калории, ккал
          </div>
          <div className="text text_color_inactive text_type_digits-medium">
            {ingredient.calories}
          </div>
        </div>
        <div>
          <div className="text text_color_inactive text_type_main-default">
            Белки, г
          </div>
          <div className="text text_color_inactive text_type_digits-medium">
            {ingredient.proteins}
          </div>
        </div>
        <div>
          <div className="text text_color_inactive text_type_main-default">
            Жиры, г
          </div>
          <div className="text text_color_inactive text_type_digits-medium">
            {ingredient.fat}
          </div>
        </div>
        <div>
          <div className="text text_color_inactive text_type_main-default">
            Углеводы, г
          </div>
          <div className="text text_color_inactive text_type_digits-medium">
            {ingredient.carbohydrates}
          </div>
        </div>
      </div>
    </div>
  )
}

IngredientMoinfo.propTypes = {
  ingredient: ingredientPropType.isRequired
}