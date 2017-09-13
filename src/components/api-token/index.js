import React from 'react'
import classNames from 'classnames/bind'

import Input from '../fields/input'
import styles from './ApiToken.pss'

const cx = classNames.bind(styles)

export default ({ validateToken }) => {
  return (
    <div className={cx('root')}>
      <Input
        label="API Token"
        placeholder="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        meta={{}}
      />
    </div>
  )
}
