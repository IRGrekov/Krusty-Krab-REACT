import React, { useState, useEffect } from 'react'
import { Header } from '../header/header'
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients'
import { BurgerConstructor } from '../burger-constructor/burger-constructor'
import { Modal } from '../modal/modal'
import { IngredientDetails } from '../ingredient-details/ingredient-details'
import { OrderDetails } from '../order-details/order-details'
import { useModal } from '../../hooks/useModal'
import { useDispatch, useSelector } from 'react-redux'
import { getBurgerIngredients } from '../../services/actions/burger-ingredients'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { getOrderDetails } from '../../services/actions/order-details'
import { deleteIngredientDetails } from '../../services/actions/ingredient-details'
import { api } from '../../api/api'
import styles from './app.module.css'

function App() {
  const { isModalOpen, openModal, closeModal } = useModal()
  const [ingredient, setIngredient] = React.useState(null)

  const closeModalWindow = () => {
    setIngredient(null)
    closeModal()
  }

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getBurgerIngredients())
  }, [dispatch])

  const buns = useSelector((state) => state.burgerConstructor.bunsList)
  const main = useSelector((state) => state.burgerConstructor.mainList)
  const openMoreIngredientsModal = useSelector(
    (state) => !!state.ingredientDetails.ingredientDetails
  )
  const ingredients = [
    ...buns.map((ingredient) => ingredient._id),
    ...main.map((ingredient) => ingredient._id),
  ]

  const handleOrderClick = () => {
    openModal()
    dispatch(getOrderDetails(ingredients))
  }

  const closeIngredientsModal = () => {
    dispatch(deleteIngredientDetails())
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Header />
        <main className={styles.main}>
          <BurgerIngredients />
          <BurgerConstructor handleOrderClick={handleOrderClick} />
        </main>
        {openMoreIngredientsModal && (
          <Modal onClose={closeIngredientsModal} header="Детали ингредиента">
            <IngredientDetails />
          </Modal>
        )}
        {isModalOpen && (
          <Modal header="" onClose={closeModalWindow}>
            <OrderDetails />
          </Modal>
        )}
      </div>
    </DndProvider>
  )
}

export default App
