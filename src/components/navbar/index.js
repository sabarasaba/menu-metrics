import React from 'react'
import classNames from 'classnames/bind'
import { Menu, Dropdown } from 'antd'
import { Link, NavLink } from 'react-router-dom'
import { Settings, RefreshCcw } from 'react-feather'

import styles from './Navbar.pss'

const cx = classNames.bind(styles)

export default ({ hasSettings, isLoading, onRefreshClick, onCloseApp }) => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <NavLink to="/settings">
          Settings
        </NavLink>
      </Menu.Item>
      <Menu.Item disabled key="1">
        <NavLink to="/settings">
          Check update
        </NavLink>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={onCloseApp}>
        <div onClick={onCloseApp}>
          Quit
        </div>
      </Menu.Item>
    </Menu>
  )

  return (
    <nav className={cx('root')}>
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" href="#a">
          <Settings color="#24b47e" />
        </a>
      </Dropdown>
      {hasSettings &&
        <Link to="/" onClick={onRefreshClick}>
          <RefreshCcw color="#24b47e" className={cx({ loading: isLoading })} />
        </Link>
      }
    </nav>
  )
}
