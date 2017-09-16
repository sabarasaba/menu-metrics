import React from 'react'
import classNames from 'classnames/bind'

import styles from './ExpiredPage.pss'

const electron = window.require('electron')
const cx = classNames.bind(styles)

export default () => {
  const onBuyClick = (e) => {
    electron.remote.shell.openExternal(process.env.REACT_APP_WEB_URI)
  }

  return (
    <div className={cx('root')}>
      <p>Your licence expired, please buy one!</p>

      <button type="submit" onClick={onBuyClick}>
        Buy for $10
      </button>
    </div>
  )
}


