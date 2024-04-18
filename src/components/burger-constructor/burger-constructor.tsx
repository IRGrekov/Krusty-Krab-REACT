import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import { useDrop } from 'react-dnd'
import { nanoid } from 'nanoid'
import {
  addIngredient,
  setBun,
} from '../../services/actions/burger-constructor'
import { useNavigate } from 'react-router-dom'
import { getOrderDetails } from '../../services/actions/order-details'
import { Modal } from '../modal/modal'
import { BurgerConstructorItem } from '../burger-constructor-item/burger-constructor-item'
import { ConfirmationOrder } from '../сonfirmation-order/сonfirmation-order'
import { OrderDetails } from '../order-details/order-details'
import logo from '../../images/krusty-krab-png.png'
import style from './burger-constructor.module.css'
import {
  TBurgerConstructorElement,
  TIngredientType,
  TItem,
} from '../../constant/types'

export function BurgerConstructor() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const buns = useSelector((state: any) => state.burgerConstructor.bunsList)
  const main = useSelector((state: any) => state.burgerConstructor.mainList)
  const ingredients = useSelector(
    (state: any) => state.burgerIngredients.burgerIngredients
  )
  const idIngredientsList = ingredients.map((el: TIngredientType) => el._id)
  const authorization = useSelector(
    (state: any) => state.userAuthorization.authorization
  )

  const [openModal, setOpenModal] = React.useState(false)
  const handleOrderClick = () => {
    if (!authorization) {
      navigate('/login')
    } else {
      setOpenModal(!openModal)
      // @ts-ignore
      dispatch(getOrderDetails(idIngredientsList))
    }
  }
  const closeModal = () => {
    setOpenModal(!openModal)
  }

  const [, drop] = useDrop(() => ({
    accept: 'ingredient',
    drop: (item: TItem) => addElement(item.ingredient),
  }))

  const addElement = (element: TIngredientType) => {
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
            price={0}
          />
        </div>
      )}

      <div className={style.saucesAndMain}>
        {main.length > 0 ? (
          main.map((element: TIngredientType, index: number) => {
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
              price={0}
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
            price={0}
          />
        </div>
      )}
      {buns.length > 0 ? (
        <ConfirmationOrder handleOrderClick={handleOrderClick} />
      ) : null}
      {openModal && (
        <Modal onClose={closeModal} header="">
          <OrderDetails />
        </Modal>
      )}
    </div>
  )
}


