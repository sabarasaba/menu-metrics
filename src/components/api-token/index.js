import React from 'react'
import classNames from 'classnames/bind'

import Input from '../fields/input'
import styles from './ApiToken.pss'

const cx = classNames.bind(styles)

export default ({
  hasPremium,
  hasTrial,
  trialDaysLeft,
  failed,
  isLoading,
  onInputBlur
}) => {
  return (
    <div className={cx('root')}>
      {failed &&
        <div>failed..</div>
      }
      {isLoading &&
        <div>is loading..</div>
      }
      <Input
        input={{
          onBlur: onInputBlur
        }}
        label="API Token"
        placeholder="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        meta={{}}
      />
      {!hasPremium && hasTrial &&
        <p>Trial mode, {trialDaysLeft} days left.</p>
      }
    </div>
  )
}
