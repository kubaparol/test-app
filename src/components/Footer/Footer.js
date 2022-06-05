import React from 'react'

import classes from './styles.module.css'

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.footer__paragraph}>All rights reserved. 2022 &copy;
        <a href="https://github.com/kubaparol" className={classes.paragraph__link} target="_blank">kubaparol</a>
      </p>
    </footer>
  )
}