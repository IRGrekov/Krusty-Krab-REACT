import { api } from '../../api/api'

export const GET_BURGER_INGREDIENTS_REQUEST = 'GET_BURGER_INGREDIENTS_REQUEST'
export const GET_BURGER_INGREDIENTS_SUCCESS = 'GET_BURGER_INGREDIENTS_SUCCESS'
export const GET_BURGER_INGREDIENTS_FAILURE = 'GET_BURGER_INGREDIENTS_FAILURE'

export const getBurgerIngredientsSuccess = (data) => ({
  type: GET_BURGER_INGREDIENTS_SUCCESS,
  payload: data,
})

export function getBurgerIngredients() {
  return (dispatch) =>
    api
      .getIngredients()
      .then(({ data }) => dispatch(getBurgerIngredientsSuccess(data)))
      .catch(console.error)
}
