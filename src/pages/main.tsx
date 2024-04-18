import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { BurgerIngredients } from '../components/burger-ingredients/burger-ingredients'
import { BurgerConstructor } from '../components/burger-constructor/burger-constructor'
import style from './pages.module.css'

export function Main() {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className={style.content}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </DndProvider>
  )
}
