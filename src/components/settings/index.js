import React from 'react'
import classNames from 'classnames/bind'
import { Field } from 'redux-form'
import renderField from '../fields/input'

import styles from './Settings.pss'

const cx = classNames.bind(styles)

export default props => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <form className={cx('root')} onSubmit={handleSubmit}>
      <Field
        name="url"
        type="text"
        label="URL"
        placeholder="https://example.com"
        component={renderField}
      />
      <Field
        name="interval"
        type="text"
        label="Auto-Refresh Interval (minutes)"
        placeholder="5"
        component={renderField}
      />

      <div className={cx('footer')}>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  )
}
