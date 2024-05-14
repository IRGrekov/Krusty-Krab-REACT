import { api } from '../../api/api'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppDispatch, RootState } from '../../main'

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST'
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS'
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE'

export const forgotPasswordSuccess = (payload: boolean) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload,
})

export function forgotPassword(email: string) {
  return (dispatch: AppDispatch) => {
    dispatch({ type: FORGOT_PASSWORD_REQUEST })
    api
      .forgot(email)
      .then(({ success }) => {
        dispatch(forgotPasswordSuccess(success))
      })
      .catch(() => {
        dispatch({ type: FORGOT_PASSWORD_FAILURE })
      })
  }
}
