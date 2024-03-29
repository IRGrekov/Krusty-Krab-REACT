import { combineReducers } from 'redux'
import { burgerConstructorReducer } from './burger-constructor'
import { burgerIngredientsReducer } from './burger-ingredients'
import { ingredientDetailsReducer } from './ingredient-details'
import { orderDetailsReducer } from './order-details'
import { scrollIngredientsReducer } from './burger-ingredients-scroll'

export const rootReducer = combineReducers({
  burgerConstructor: burgerConstructorReducer,
  burgerIngredients: burgerIngredientsReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsReducer,
  scrollIngredients: scrollIngredientsReducer,
})
