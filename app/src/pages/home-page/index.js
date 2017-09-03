import React from 'react'
import classNames from 'classnames/bind'

import NumberText from '../../components/number-text'
import styles from './HomePage.pss'

const cx = classNames.bind(styles)

export default () => {
  return (
    <div className={cx('root')}>
      <div className="row-3">
        <NumberText number="67" text="Active Users" />
        <NumberText number="42" text="Current Users" />
        <NumberText number="17%" text="Bounce Rate" />
      </div>
    </div>
  )
}


