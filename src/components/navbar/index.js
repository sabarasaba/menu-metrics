import React from 'react'
import classNames from 'classnames/bind'
import { Link, NavLink } from 'react-router-dom'
import { Settings, RefreshCcw } from 'react-feather'

import styles from './Navbar.pss'

const cx = classNames.bind(styles)

export default ({ hasSettings, isLoading, onRefreshClick }) => {
  return (
    <nav className={cx('root')}>
      <NavLink to="/settings">
        <Settings color="#24b47e" />
      </NavLink>
      {hasSettings &&
        <Link to="/" onClick={onRefreshClick}>
          <RefreshCcw color="#24b47e" className={cx({ loading: isLoading })} />
        </Link>
      }
    </nav>
  )
}
