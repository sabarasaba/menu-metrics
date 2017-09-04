import React from 'react'
// import classNames from 'classnames/bind'
import { Link, NavLink } from 'react-router-dom'
import { Settings, RefreshCcw } from 'react-feather'

import * as styles from './styles.js'

// const cx = classNames.bind(styles)

export default () => {
  return (
    <nav className={styles.root}>
      <NavLink to="/about">
        <Settings color="#24b47e" />
      </NavLink>
      <Link to="/" className={styles.link}>
        <RefreshCcw color="#24b47e" />
      </Link>
    </nav>
  )
}
