import React, { useState, useEffect } from 'react'
import { Header } from '../header/header'
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients'
import { BurgerConstructor } from '../burger-constructor/burger-constructor'
import { Base_URL } from '../../constant/url'
import Loader from '../loader/loader'
import InfoDetails from '../info-details/info-details'
// import { dataList } from '../../constant/dataList'
import styles from './app.module.css'

function App() {
  const [ingridients, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    getIngredients()
  }, [])

  const getIngredients = async () => {
    setLoading(true)
    await fetch(Base_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status)
        } else {
          return response.json()
        }
      })
      .then((data) => {
        setData(data.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setLoading(false))
  }

  return (
    <>
      <Header />
      {!isLoading && ingridients.length > 0 ? (
        <main className={styles.main}>
          <BurgerIngredients ingredients={ingridients} />
          <BurgerConstructor
            ingredients={ingridients.filter(
              (ingredient) => ingredient.type !== 'bun'
            )}
          />
        </main>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default App
