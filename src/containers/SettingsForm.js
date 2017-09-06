import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setSettings } from '../reducks/settings'
import Settings from '../components/settings'

export const validate = (values, props) => {
  const errors = {}

  return errors
}

export const onSubmit = (values, dispatch, props) => {
  props.setSettings(values)
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsForm)
