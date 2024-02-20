import { BurgerIngredientsEl } from '../burger-ingredients-item/burger-ingredients-item'
import PropTypes from 'prop-types'
import { ingredientPropType } from '../../constant/propTypes'
import style from './burger-ingredients-chapters.module.css'

export function BurgerIngredientsСhapters({ ingredients }) {
  return (
    <div className={style.chapters}>
      <div id="bun" className="text text_type_main-medium">
        Булки
      </div>
      <div className={style.elements}>
        {ingredients
          .filter((el) => el.type === 'bun')
          .map((el) => (
            <BurgerIngredientsEl key={el._id} ingredient={el} />
          ))}
      </div>
      <div id="sauce" className="pt-10 text text_type_main-medium">
        Соусы
      </div>
      <div className={style.elements}>
        {ingredients
          .filter((el) => el.type === 'sauce')
          .map((el) => (
            <BurgerIngredientsEl key={el._id} ingredient={el} />
          ))}
      </div>
      <div id="main" className="pt-10 text text_type_main-medium">
        Начинки
      </div>
      <div className={style.elements}>
        {ingredients
          .filter((el) => el.type === 'main')
          .map((el) => (
            <BurgerIngredientsEl key={el._id} ingredient={el} />
          ))}
      </div>
    </div>
  )
}

BurgerIngredientsСhapters.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
}
