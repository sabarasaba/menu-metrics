import React from 'react'
import classNames from 'classnames/bind'

import Checkbox from '../fields/checkbox'
import styles from './AutoLaunch.pss'

const cx = classNames.bind(styles)

export default ({
  isEnabled,
  onCheckboxToggle
}) => {
  return (
    <div className={cx('root')}>
      <Checkbox onChange={onCheckboxToggle} checked={isEnabled}>
        Launch at login
      </Checkbox>
    </div>
  )
}

