import React from 'react'
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import style from './header.module.css'

export function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.list}>
          <div className={style.leftEl}>
            <div className="pt-4 pb-4 pl-5 pr-5">
              <div className={style.link}>
                {/* <BurgerIcon type="secondary" style={{ marginTop: "5px" }} />  */}
                <div className="pl-3 text text_type_main-default">
                  {<BurgerIcon type="primary" />} Конструктор
                </div>
              </div>
            </div>
            <div className="pt-4 pb-4 pl-5 pr-5">
              <div className={style.link}>
                {/* <ListIcon type="secondary" style={{ marginTop: "5px" }} />  */}
                <div className="pl-3 text text_type_main-default text_color_inactive">
                  {<ListIcon type="secondary" />} Лента заказов
                </div>
              </div>
            </div>
          </div>
          <div className={style.logotip}>
            <Logo />
          </div>
          <div className={style.profile}>
            <div className={style.link}>
              {/* <ProfileIcon type="secondary" style={{ marginTop: "5px" }} /> */}
              <div className="pl-3 text text_type_main-default text_color_inactive">
                {' '}
                <ProfileIcon type="secondary" /> Личный кабинет
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
