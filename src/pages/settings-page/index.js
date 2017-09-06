import React from 'react'
import classNames from 'classnames/bind'

import SettingsForm from '../../containers/SettingsForm'
import styles from './SettingsPage.pss'

const cx = classNames.bind(styles)

export default () => {
  return (
    <div className={cx('root')}>
      <SettingsForm />
    </div>
  )
}

