import validator from 'validator'
import { withRouter } from 'react-router'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setSettings } from '../reducks/settings'
import { fetchReport } from '../reducks/report'
import Settings from '../components/settings'

export const validate = (values, props) => {
  const errors = {}

  if (!validator.isURL(values.url || '', {
    require_tld: false
  })) {
    errors.url = 'Not a valid url'
  }

  if (!validator.isInt(values.interval || '', { min: 1 })) {
    errors.interval = 'Must be an integer bigger than 0'
  }

  return errors
}

export const onSubmit = async (values, dispatch, props) => {
  await props.setSettings(values)

  props.fetchReport()
  props.history.push('/')
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
    fetchReport: bindActionCreators(fetchReport, dispatch),
    setSettings: bindActionCreators(setSettings, dispatch)
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SettingsForm)
)
