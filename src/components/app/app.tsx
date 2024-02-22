import React, { useState, useEffect } from 'react'
import { Header } from '../header/header'
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients'
import { BurgerConstructor } from '../burger-constructor/burger-constructor'
import { dataList } from '../../constant/dataList'
import styles from './app.module.css'

function App() {
  const [ingridients, setData] = useState([])

  useEffect(() => {
    getIngridients()
  }, [])

  const getIngridients = async () => {
    await fetch('https://norma.nomoreparties.space/api/ingredients ')
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
  }

  return (
    <>
      <Header />

      <main className={styles.main}>
        <BurgerIngredients ingredients={ingridients} />
        <BurgerConstructor
          ingredients={ingridients.filter(
            (ingredient) => ingredient.type !== 'bun'
          )}
        />
      </main>
    </>
    //     <>
    //         <Header/>
    //         <main className={styles.main}>
    //             <BurgerIngredients ingredients={dataList}/>
    //             <BurgerConstructor ingredients={dataList.filter(ingredient => ingredient.type !== 'bun')}/>
    //         </main>
    //     </>
  )
}

export default App
