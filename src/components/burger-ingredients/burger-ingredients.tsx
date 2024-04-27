import React from 'react'
import { BurgerIngredientsСhapters } from '../burger-ingredients-chapters/burger-ingredients-chapters'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import {
  scrollIngredients,
  setActiveTab,
} from '../../services/actions/burger-ingredients-scroll'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import style from './burger-ingredients.module.css'


export function BurgerIngredients() {
  const dispatch = useAppDispatch()
  const current = useAppSelector((state) => state.scrollIngredients.current)
  const setCurrent = (value: string) => {
    dispatch(setActiveTab(value))
    dispatch(scrollIngredients(value))
  }

  return (
    <div className={style.section}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <div className={style.tabs}>
        <Tab active={current === 'bun'} value="bun" onClick={setCurrent}>
          Булки
        </Tab>
        <Tab active={current === 'sauce'} value="sauce" onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab active={current === 'main'} value="main" onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <BurgerIngredientsСhapters />
    </div>
  )
}
