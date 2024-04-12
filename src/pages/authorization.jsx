import React, {useEffect} from 'react';
import {
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { userAuthorization } from '../services/actions/authorization'
import style from './pages.module.css'

export function Authorization() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();
  const authorization = useSelector(
    (state) => state.userAuthorization.authorization
  )

  const [value, setValue] = React.useState({
    email: '',
    password: '',
  })

  const checkAuthorization = (evt) => {
    evt.preventDefault()
    dispatch(userAuthorization(value.email, value.password))
  }

  const fromPage = location.state?.from?.pathname || '/';

  useEffect(() => {
      if (authorization) {
          navigate(fromPage)
      }
  }, [authorization])

  return (
    <form className={style.default} onSubmit={checkAuthorization}>
      <h2 className="text text_type_main-medium">Вход</h2>
      <EmailInput
        onChange={(evt) => setValue({ ...value, email: evt.target.value })}
        value={value.email}
        name={'email'}
        extraClass="mt-6"
      />
      <PasswordInput
        onChange={(evt) => setValue({ ...value, password: evt.target.value })}
        value={value.password}
        name={'password'}
        icon="ShowIcon"
        extraClass="mt-6"
      />
      <Button type="primary" size="medium" htmlType="submit" extraClass="mt-6">
        Войти
      </Button>
      <div className={`${style.choice} mt-20`}>
        <p className="text text_type_main-default text_color_inactive">
          Вы — новый пользователь?
        </p>
        <Link
          to="/register"
          className={`${style.link} text text_type_main-default`}
        >
          Зарегистрироваться
        </Link>
      </div>
      <div className={`${style.choice} mt-4`}>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?
        </p>
        <Link
          to="/forgot-password"
          className={`${style.link} text text_type_main-default`}
        >
          Восстановить пароль
        </Link>
      </div>
    </form>
  )
}
