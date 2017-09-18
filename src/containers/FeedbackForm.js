import validator from 'validator'
import { withRouter } from 'react-router'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { sendFeedback } from '../reducks/settings'
import Feedback from '../components/feedback'

export const validate = (values, props) => {
  const errors = {}

  if (!validator.isEmail(values.email || '')) {
    errors.email = 'Not a valid email'
  }

  if (!values.body || values.body.length === 0) {
    errors.body = 'Feedback body cannot be empty'
  }

  return errors
}

export const onSubmit = (values, dispatch, props) => {
  props.sendFeedback(values)

  props.history.push(props.hasSettings ? '/' : '/settings')
}

const FeedbackForm = reduxForm({
  form: 'FeedbackForm',
  validate,
  onSubmit
})(Feedback)

function mapStateToProps(state) {
  return {
    hasSettings: state.settings.data.interval
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendFeedback: bindActionCreators(sendFeedback, dispatch)
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FeedbackForm)
)

