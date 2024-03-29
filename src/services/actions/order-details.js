import { api } from '../../api/api'
import { clearConstructor } from './burger-constructor'

export const GET_ORDER_DETAILS_REQUEST = 'GET_ORDER_DETAILS_REQUEST'
export const GET_ORDER_DETAILS_SUCCESS = 'GET_ORDER_DETAILS_SUCCESS'
export const GET_ORDER_DETAILS_FAILURE = 'GET_ORDER_DETAILS_FAILURE'

export const getOrderSuccess = (number) => ({
  type: GET_ORDER_DETAILS_SUCCESS,
  payload: number,
})

export function getOrderDetails(ingredients) {
  return (dispatch) =>
    api
      .getOrderDetails(ingredients)
      .then(({ order: { number } }) => dispatch(getOrderSuccess(number)))
      .then(() => {
        dispatch(clearConstructor())
      })
      .catch(console.error)
}
