import validator from 'validator'
import _ from 'lodash'
import { withRouter } from 'react-router'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setSettings } from '../reducks/settings'
import Settings from '../components/settings'

export const validate = (values, props) => {
  const errors = {}

  if (!validator.isURL(values.url || '')) {
    errors.url = 'Not a valid url'
  }

  if (!validator.isInt(values.interval || '', { min: 1 })) {
    errors.interval = 'Must be an integer bigger than 0'
  }

  return errors
}

export const onSubmit = (values, dispatch, props) => {
  props.setSettings(values)

  // First time user opens the app, after settings send them to their dashboard
  if (_.isEmpty(props.initialValues)) {
    props.history.push('/')
  }
}

const SettingsForm = reduxForm({
  form: 'SettingsForm',
  validate,
  onSubmit
})(Settings)

function mapStateToProps(state) {
  return {
    initialValues: state.settings.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSettings: bindActionCreators(setSettings, dispatch)
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SettingsForm)
)
