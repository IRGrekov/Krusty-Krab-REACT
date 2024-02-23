import React, { useState } from 'react'
import { BurgerIngredientsСhapters } from '../burger-ingredients-chapters/burger-ingredients-chapters'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { ingredientPropType } from '../../constant/propTypes'
import PropTypes from 'prop-types'
import style from './burger-ingredients.module.css'

export function BurgerIngredients({ ingredients, handleIngredientClick }) {
  const [chapter, setСurrent] = useState('loaf')

  const setNow = (tab) => {
    setСurrent(tab)
  }

  return (
    <div className={style.section}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <div className={style.tabs}>
        <Tab
          active={chapter === 'loaf'}
          value="loaf"
          onClick={() => setNow('loaf')}
        >
          Булки
        </Tab>
        <Tab
          active={chapter === 'sauce'}
          value="sauce"
          onClick={() => setNow('sauce')}
        >
          Соусы
        </Tab>
        <Tab
          active={chapter === 'main'}
          value="main"
          onClick={() => setNow('main')}
        >
          Начинки
        </Tab>
      </div>
      <BurgerIngredientsСhapters
        handleIngredientClick={handleIngredientClick}
        ingredients={ingredients}
      />
    </div>
  )
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
  handleIngredientClick: PropTypes.func.isRequired
}
