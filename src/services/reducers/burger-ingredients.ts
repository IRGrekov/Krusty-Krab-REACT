import {
  GET_BURGER_INGREDIENTS_FAILURE,
  GET_BURGER_INGREDIENTS_REQUEST,
  GET_BURGER_INGREDIENTS_SUCCESS,
} from '../actions/burger-ingredients'
import { TIngredientType } from '../../constant/types'
import { TUnionAction } from '../actions/interfaces'

type TInitialState = {
  burgerIngredients: Array<TIngredientType>
  burgerIngredientsRequest: boolean
  burgerIngredientsFailure: boolean
}

export const initialState: TInitialState = {
  burgerIngredients: [],
  burgerIngredientsRequest: false,
  burgerIngredientsFailure: false,
}

export const burgerIngredientsReducer = (
  state = initialState,
  action: TUnionAction
) => {
  switch (action.type) {
    // case GET_BURGER_INGREDIENTS_REQUEST: {
    //     return {
    //         ...state,
    //         burgerIngredientsRequest: true
    //     }
    // }
    case GET_BURGER_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        burgerIngredients: [...action.payload],
        burgerIngredientsRequest: false,
        burgerIngredientsFailure: false,
      }
    }
    // case GET_BURGER_INGREDIENTS_FAILURE: {
    //     return {
    //         ...state,
    //         burgerIngredientsRequest: false,
    //         burgerIngredientsFailure: true
    //     }
    // }
    default: {
      return state
    }
  }
}
