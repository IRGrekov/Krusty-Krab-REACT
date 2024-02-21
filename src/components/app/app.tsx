import React from 'react';
import {Header} from "../header/header";
import {BurgerIngredients} from "../burger-ingredients/burger-ingredients";
import {BurgerConstructor} from "../burger-constructor/burger-constructor";
import { dataList } from '../../constant/dataList'
import styles from './app.module.css'


function App() {
    return (
        <>
            <Header/>
            <main className={styles.main}>
                <BurgerIngredients ingredients={dataList}/>
                <BurgerConstructor ingredients={dataList.filter(ingredient => ingredient.type !== 'bun')}/>
            </main>
        </>
    );
}

export default App;

