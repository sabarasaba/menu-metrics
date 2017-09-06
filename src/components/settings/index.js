import React from 'react'
import classNames from 'classnames/bind'
import { Field } from 'redux-form'

import styles from './Settings.pss'

const cx = classNames.bind(styles)

export default props => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <form className={cx('root')} onSubmit={handleSubmit}>
      <div className={cx('inputLine')}>
        <label>URL</label>
        <div>
          <Field
            name="url"
            component="input"
            type="text"
            placeholder="https://example.com"
          />
        </div>
      </div>
      <div className={cx('inputLine')}>
        <label>Auto-Refresh Interval (minutes)</label>
        <div>
          <Field
            name="interval"
            component="input"
            type="text"
            placeholder="5"
          />
        </div>
      </div>
      <div className={cx('footer')}>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  )
}
