import React from 'react'
import classNames from 'classnames/bind'
import { Field } from 'redux-form'
import renderField from '../fields/input'

import styles from './Feedback.pss'

const cx = classNames.bind(styles)

export default props => {
  const { handleSubmit, pristine, submitting } = props

  return (
    <form className={cx('root')} onSubmit={handleSubmit}>
      <Field
        name="email"
        type="text"
        label="Email"
        placeholder="hello@example.com"
        component={renderField}
      />
      <Field
        name="body"
        type="textarea"
        label="Message"
        placeholder="Anything we should fix? Any feature requests?"
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

