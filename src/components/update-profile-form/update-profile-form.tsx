import React, { FormEventHandler } from 'react'
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { getUser } from '../../services/actions/user'
import { updateUser } from '../../services/actions/user'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import style from './update-profile-form.module.css'

export function UpdateProfileForm() {
  const dispatch = useAppDispatch()
  const userName = useAppSelector((state) => state.profile.user.name)
  const userEmail = useAppSelector((state) => state.profile.user.email)

  React.useEffect(() => {
    // @ts-ignore
    dispatch(getUser())
  }, [dispatch])

  const [value, setValue] = React.useState({
    name: userName,
    email: userEmail,
    password: '',
  })

  React.useEffect(() => {
    setValue({
      name: userName,
      email: userEmail,
      password: '',
    })
  }, [userName, userEmail])

  const updateProfile: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault()
    // @ts-ignore
    dispatch(updateUser(value.name, value.email, value.password))
  }

  const cancelEditing = () => {
    setValue({
      name: userName,
      email: userEmail,
      password: '',
    })
  }

  const inputRef = React.useRef<HTMLInputElement>(null)
  const onIconClick = () => {
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  return (
    <form className={style.form} onSubmit={updateProfile}>
      <Input
        type={'text'}
        placeholder={'Имя'}
        onChange={(evt) => setValue({ ...value, name: evt.target.value })}
        value={value.name}
        name={'name'}
        error={false}
        ref={inputRef}
        onIconClick={() => onIconClick()}
        errorText={'Ошибка'}
        size={'default'}
        icon="EditIcon"
        data-testid="name-input"
      />
      <Input
        type={'email'}
        placeholder={'Логин'}
        onChange={(evt) => setValue({ ...value, email: evt.target.value })}
        value={value.email}
        name={'email'}
        icon="EditIcon"
        extraClass="mt-6"
        ref={inputRef}
        onIconClick={() => onIconClick()}
        data-testid="email-input"
      />
      <Input
        type={'password'}
        placeholder={'Пароль'}
        onChange={(evt) => setValue({ ...value, password: evt.target.value })}
        ref={inputRef}
        onIconClick={() => onIconClick()}
        value={value.password}
        name={'password'}
        icon="EditIcon"
        extraClass="mt-6"
        data-testid="password-input"
      />
      <div className={`${style.choice} mt-6`}>
        <Button
          type="secondary"
          size="medium"
          htmlType="reset"
          extraClass="pr-7"
          onClick={cancelEditing}
          data-testid="cancel-button"
        >
          Отмена
        </Button>
        <Button type="primary" size="medium" htmlType="submit">
          Сохранить
        </Button>
      </div>
    </form>
  )
}
