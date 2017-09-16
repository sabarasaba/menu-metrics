import React from 'react'
import classNames from 'classnames/bind'

import FeedbackForm from '../../containers/FeedbackForm'
import styles from './FeedbackPage.pss'

const cx = classNames.bind(styles)

export default () => {
  return (
    <div className={cx('root')}>
      <FeedbackForm />
    </div>
  )
}


