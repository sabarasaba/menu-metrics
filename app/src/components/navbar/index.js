import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Settings, RefreshCcw } from 'react-feather'

import * as styles from './styles.js'

export default () => {
  return (
    <nav className={styles.root}>
      <NavLink to="/about">
        <Settings color="#24b47e" />
      </NavLink>
      <Link to="/">
        <RefreshCcw color="#24b47e" />
      </Link>
    </nav>
  )
}
