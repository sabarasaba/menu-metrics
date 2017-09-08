import React from 'react'
import classNames from 'classnames/bind'

import styles from './input.pss'

const cx = classNames.bind(styles)

export default ({
  input,
  label,
  type,
  meta: { touched, error }
}) => {
  return (
    <div className={cx('inputLine')}>
      <label>{label}</label>
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
