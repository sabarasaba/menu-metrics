import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

import Settings from '../components/settings'

export const validate = (values, props) => {
  const errors = {}

  return errors
}

export const onSubmit = (values) => {
  console.log('done')
  console.log(values)
}

const SettingsForm = reduxForm({
  form: 'SettingsForm',
  validate,
  onSubmit
})(Settings)

function mapStateToProps () {
  return {
    initialValues: {
      interval: 5
    }
  }
}

function mapDispatchToProps() {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsForm)


