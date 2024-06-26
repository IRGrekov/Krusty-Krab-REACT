import React, { FormEventHandler } from 'react'
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, Navigate } from 'react-router-dom'
import { userRegistration } from '../services/actions/registration'
import { useAppDispatch, useAppSelector } from '../utils/hooks'
import style from './pages.module.css'

export function Registration() {
  const authorization = useAppSelector(
    (state) => state.userAuthorization.authorization
  )

  const dispatch = useAppDispatch()
  const [value, setValue] = React.useState({
    name: '',
    email: '',
    password: '',
  })

  const checkRegistration: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault()
    // @ts-ignore
    dispatch(userRegistration(value.name, value.email, value.password))
  }
  const inputRef = React.useRef<HTMLInputElement>(null)
  const onIconClick = () => {
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  if (authorization) {
    return <Navigate to={'/profile'} />
  }

  return (
    <form className={style.default} onSubmit={checkRegistration}>
      <h2 className="text text_type_main-medium">Регистрация</h2>
      <Input
        type={'text'}
        placeholder={'Имя'}
        onChange={(evt) => setValue({ ...value, name: evt.target.value })}
        value={value.name}
        name={'name'}
        error={false}
        ref={inputRef}
        onIconClick={onIconClick}
        errorText={'Ошибка'}
        size={'default'}
        extraClass="mt-6"
      />
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
        Зарегистрироваться
      </Button>
      <div className={`${style.choice} mt-20`}>
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?
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
