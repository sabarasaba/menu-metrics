import React from 'react'
import classNames from 'classnames/bind'

import Input from '../fields/input'
import styles from './ApiToken.pss'

const cx = classNames.bind(styles)

export default ({
  inputValue,
  apiKey,
  hasTrial,
  trialDaysLeft,
  failed,
  isLoading,
  onInputChange,
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
          onBlur: onInputBlur,
          onChange: onInputChange,
          value: inputValue
        }}
        label="API Token"
        placeholder="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        meta={{}}
      />
      {!apiKey && hasTrial &&
        <p>Trial mode, {trialDaysLeft} days left.</p>
      }
    </div>
  )
}
