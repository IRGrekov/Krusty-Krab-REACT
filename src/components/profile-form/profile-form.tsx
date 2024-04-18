import React from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import { userLogout } from '../../services/actions/logout'
import { useDispatch, useSelector } from 'react-redux'
import style from './profile-form.module.css'

export function ProfileForm() {
  const dispatch = useDispatch()
  const authorization = useSelector(
    (state: any) => state.userAuthorization.authorization
  )

  const handleLogout = React.useCallback(() => {
    //@ts-ignore
    dispatch(userLogout())
  }, [dispatch])

  if (!authorization) {
    return <Navigate to={'/login'} />
  }
  return (
    <nav className={style.menu}>
      <NavLink
        to="/profile"
        className={`${style.link} text text_type_main-medium text_color_inactive`}
      >
        Профиль
      </NavLink>
      <NavLink
        to="/profile/orders"
        className={`${style.link} text text_type_main-medium text_color_inactive`}
      >
        История заказов
      </NavLink>
      <button
        onClick={handleLogout}
        className={`${style.out} text text_type_main-medium text_color_inactive`}
      >
        Выход
      </button>
      <span className="text text_type_main-default text_color_inactive mt-20">
        В этом разделе вы можете
      </span>
      <span className="text text_type_main-default text_color_inactive">
        изменить свои персональные данные
      </span>
    </nav>
  )
}
