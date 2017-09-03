import React from 'react'
import classNames from 'classnames/bind'

import styles from './NumberText.pss'

const cx = classNames.bind(styles)

export default ({ number, text }) => {
  return (
    <div className={cx('root')}>
      <div className={cx('number')}>
        {number}
      </div>
      <div className={cx('text')}>
        {text}
      </div>
    </div>
  )
}

