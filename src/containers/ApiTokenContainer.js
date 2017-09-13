import React, { Component } from 'react'
import { connect } from 'react-redux'
 import { bindActionCreators } from 'redux'

import { validateToken } from '../reducks/settings'
import ApiToken from '../components/api-token'

class ApiTokenContainer extends Component {
  render() {
    const {
      validateToken
    } = this.props

    return (
      <ApiToken
        validateToken={validateToken}
      />
    )
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    validateToken: bindActionCreators(validateToken, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiTokenContainer)

