import React, { FormEventHandler } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  EmailInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, Navigate } from 'react-router-dom'
import { forgotPassword } from '../services/actions/forgot-password'
import style from './pages.module.css'

export function ForgotPassword() {
  const dispatch = useDispatch()

  const success = useSelector((state: any) => state.forgotPassword.success)
  const authorization = useSelector(
    (state: any) => state.userAuthorization.authorization
  )

  const [value, setValue] = React.useState({
    email: '',
  })

  const handleRecover: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault()
    // @ts-ignore
    dispatch(forgotPassword(value.email))
  }

  if (success) {
    return <Navigate to={'/reset-password'} />
  }

  if (authorization) {
    return <Navigate to={'/profile'} />
  }

  return (
    <form className={style.default} onSubmit={handleRecover}>
      <h2 className="text text_type_main-medium">Восстановление пароля</h2>
      <EmailInput
        onChange={(evt) => setValue({ ...value, email: evt.target.value })}
        value={value.email}
        name={'email'}
        extraClass="mt-6"
      />
      <Button type="primary" size="medium" htmlType="submit" extraClass="mt-6">
        Восстановить
      </Button>
      <div className={`${style.choice} mt-20`}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
        </p>
        <Link
          to="/login"
          className={`${style.link} text text_type_main-default`}
        >
          Войти
        </Link>
      </div>
    </form>
  )
}
