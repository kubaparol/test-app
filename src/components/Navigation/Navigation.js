import React from 'react'
import {Link} from 'react-router-dom'

import classes from './styles.module.css'

export const Navigation = props => {

  const {logo, items} = props

  return (
    <nav className={classes.nav}>
      <div className={classes.nav__container}>
        <img src={logo} alt="logo" className={classes.container__logo} />
      </div>
      <ul className={classes.nav__menu}>
        {items.map(item => {
          return (
            <li className={classes.menu__item} key={item.id}>
              <Link className={classes.item__link} to={item.to}>{item.text}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}