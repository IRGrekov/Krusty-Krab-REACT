import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useDrop } from 'react-dnd'
import { nanoid } from 'nanoid'
import {
  addIngredient,
  setBun,
} from '../../services/actions/burger-constructor'
import { BurgerConstructorItem } from '../burger-constructor-item/burger-constructor-item'
import { ConfirmationOrder } from '../сonfirmation-order/сonfirmation-order'
import logo from '../../images/krusty-krab-png.png'
import style from './burger-constructor.module.css'

export function BurgerConstructor({ handleOrderClick }) {
  const dispatch = useDispatch()

  const buns = useSelector((state) => state.burgerConstructor.bunsList)
  const main = useSelector((state) => state.burgerConstructor.mainList)

  const [, drop] = useDrop(() => ({
    accept: 'ingredient',
    drop: (item) => addElement(item.ingredient),
  }))

  const addElement = (element) => {
    element = { ...element, id: nanoid() }
    if (element.type === 'bun') {
      dispatch(setBun(element))
    }
    if (element.type === 'sauce' || element.type === 'main') {
      dispatch(addIngredient(element))
    }
  }

  return (
    <div className={style.listIng} ref={drop}>
      {buns.length > 0 ? (
        <div className="pl-7">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${buns[0].name} (верх)`}
            price={buns[0].price}
            thumbnail={buns[0].image}
          />
        </div>
      ) : (
        <div className="pl-7">
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Перетащите сюда булку"
            thumbnail={logo}
            price="-"
          />
        </div>
      )}

      <div className={style.saucesAndMain}>
        {main.length > 0 ? (
          main.map((element, index) => {
            return (
              <BurgerConstructorItem
                element={element}
                index={index}
                id={element.id}
                key={element.id}
              />
            )
          })
        ) : (
          <div className="pl-7">
            <ConstructorElement
              text="Перетащите сюда соус или начинку"
              thumbnail={logo}
              price="-"
            />
          </div>
        )}
      </div>
      {buns.length > 0 ? (
        <div className="pl-7">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${buns[0].name} (низ)`}
            price={buns[0].price}
            thumbnail={buns[0].image}
          />
        </div>
      ) : (
        <div className="pl-7">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Перетащите сюда булку"
            thumbnail={logo}
            price="-"
          />
        </div>
      )}
      {buns.length > 0 ? (
        <ConfirmationOrder handleOrderClick={handleOrderClick} />
      ) : null}
    </div>
  )
}

BurgerConstructor.propTypes = {
  handleOrderClick: PropTypes.func.isRequired,
}
