import React from 'react'
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink, useMatch } from 'react-router-dom'
import style from './header.module.css'

export function Header() {
  const isConstructor = useMatch('/')
  const isFeed = useMatch('/feed')
  const isProfile = useMatch('/profile')

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.list}>
          <div className={style.leftEl}>
            <div className="pt-4 pb-4 pl-5 pr-5">
              <NavLink to="/" className={style.link}>
                {/* <BurgerIcon type="secondary" style={{ marginTop: "5px" }} />  */}
                {<BurgerIcon type="primary" />} Конструктор
              </NavLink>
            </div>
            <div className="pt-4 pb-4 pl-5 pr-5">
              <NavLink to="/feed" className={style.link}>
                {/* <ListIcon type="secondary" style={{ marginTop: "5px" }} />  */}
                <div className="pl-3 text text_type_main-default text_color_inactive">
                  {<ListIcon type="secondary" />} Лента заказов
                </div>
              </NavLink>
            </div>
          </div>
          <div className={style.logotip}>
            <NavLink to="/">
              <Logo />
            </NavLink>
          </div>
          <div className={style.profile}>
            <NavLink to="/profile" className={style.link}>
              {/* <ProfileIcon type="secondary" style={{ marginTop: "5px" }} /> */}
              <ProfileIcon type={isProfile ? 'primary' : 'secondary'} /> Личный
              кабинет
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}
