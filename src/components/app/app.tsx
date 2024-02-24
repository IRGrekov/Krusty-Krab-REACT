import React, { useState, useEffect } from 'react'
import { Header } from '../header/header'
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients'
import { BurgerConstructor } from '../burger-constructor/burger-constructor'
import { Base_URL } from '../../constant/url'
import { Modal } from '../modal/modal'
import { OrderDetails } from '../order-details/ingredient-details'
import { IngredientDetails } from '../ingredient-details/ingredient-details'
import { useModal } from '../../hooks/useModal'
import { api } from '../../api/api'
import styles from './app.module.css'

function App() {
  const [data, setData] = React.useState([])
  const { isModalOpen, openModal, closeModal } = useModal()
  const [ingredient, setIngredient] = React.useState(null)

  const closeModalWindow = () => {
    setIngredient(null)
    closeModal()
  }

  const handleIngredientClick = (ingredient) => {
    setIngredient(ingredient)
    openModal()
  }

  const handleOrderClick = () => {
    openModal()
  }

  React.useEffect(() => {
    api
      .getIngredients()
      .then((data) => setData(data.data))
      .catch(console.error)
  }, [])

  return (
    <>
      <Header />
      <main className={styles.main}>
        {data !== undefined && (
          <BurgerIngredients
            ingredients={data}
            handleIngredientClick={handleIngredientClick}
          />
        )}
        <BurgerConstructor
          handleOrderClick={handleOrderClick}
          ingredients={data.filter((ingredient) => ingredient.type !== 'bun')}
        />
      </main>
      {isModalOpen && (
        <Modal
          header={ingredient ? 'Детали ингредиента' : ''}
          onClose={closeModalWindow}
        >
          {ingredient ? (
            <IngredientDetails ingredient={ingredient} />
          ) : (
            <OrderDetails />
          )}
        </Modal>
      )}
    </>
  )
}

export default App
