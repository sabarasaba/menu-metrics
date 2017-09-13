import React from 'react'
import { CheckCircle } from 'react-feather'
import classNames from 'classnames/bind'

import styles from './input.pss'

const cx = classNames.bind(styles)

export default ({
  input,
  valid,
  label,
  type,
  meta: { touched, error }
}) => {
  return (
    <div className={cx('inputLine')}>
      <label>{label} {valid && <span className={cx('valid')}><CheckCircle /></span>}</label>
      <div>
        <input {...input} type={type} placeholder={label} />
        {touched && error &&
          <span>
            {error}
          </span>
        }
      </div>
    </div>
  )
}
