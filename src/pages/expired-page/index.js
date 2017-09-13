import React from 'react'
import classNames from 'classnames/bind'

import styles from './ExpiredPage.pss'

const cx = classNames.bind(styles)

export default () => {
  return (
    <div className={cx('root')}>
      Your licence expired, please buy one!
    </div>
  )
}


