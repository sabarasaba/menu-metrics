import React from 'react'
import classNames from 'classnames/bind'
import { Link, NavLink } from 'react-router-dom'
import { Settings, RefreshCcw } from 'react-feather'

import styles from './Navbar.pss'

const cx = classNames.bind(styles)

export default ({ isLoading, onRefreshClick }) => {
  return (
    <nav className={cx('root')}>
      <NavLink to="/about">
        <Settings color="#24b47e" />
      </NavLink>
      <Link to="/" onClick={onRefreshClick}>
        <RefreshCcw color="#24b47e" className={cx({ loading: isLoading })} />
      </Link>
    </nav>
  )
}
