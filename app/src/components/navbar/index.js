import React from 'react'
import classNames from 'classnames/bind'
import { Link, NavLink } from 'react-router-dom'
import { Settings, RefreshCcw } from 'react-feather'

import styles from './NavBar.pss'

const cx = classNames.bind(styles)

export default () => {
  return (
    <nav className={cx('root')}>
      <NavLink to="/about" className={cx('link')} activeClassName={cx('active')}>
        <Settings color="#24b47e" />
      </NavLink>
      <Link to="/" className={cx('link')}>
        <RefreshCcw color="#24b47e" />
      </Link>
    </nav>
  )
}
