import React from 'react'
import classNames from 'classnames/bind'
import styles from './checkbox.pss'

const cx = classNames.bind(styles)

const Checkbox = (props) => {
  const {
    children,
    onChange,
    className,
    ...others
  } = props

  const classes = cx('input', className)

  return (
    <label className={cx('root')}>
      <input
        type="checkbox"
        onChange={onChange}
        className={classes}
        {...others}
      />
      <span className={cx('text')}>{children}</span>
    </label>
  )
}

export default Checkbox
