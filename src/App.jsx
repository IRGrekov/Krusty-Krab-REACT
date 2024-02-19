import React from 'react'
import { Header } from './components/header/header'
import { BurgerIngredients } from './components/burger-ingredients/burger-ingredients'
import { BurgerConstructor } from './components/burger-constructor/burger-constructor'
import { dataList } from './constant/dataList'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <BurgerIngredients ingredients={dataList} />
        <BurgerConstructor ingredients={dataList} />
      </main>
    </>
  )
}

export default App
