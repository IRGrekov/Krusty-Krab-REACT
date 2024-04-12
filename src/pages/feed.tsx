import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import style from './pages.module.css'

export function Feed() {
  const authorization = useSelector(
    (state: any) => state.userAuthorization.authorization
  )

  if (!authorization) {
    return <Navigate to={'/login'} />
  }

  return (
    <span
      className={`${style.text} text text_type_main-medium text_color_inactive`}
    >
      Soon
    </span>
  )
}
