import React from 'react'
import classNames from 'classnames/bind'

import styles from './NotFound.pss'

const cx = classNames.bind(styles)

export default () => {
  return (
    <div className={cx('root')}>
      <p>
        Nothing here
      </p>
    </div>
  )
}

