import React, { Component } from 'react'
import { connect } from 'react-redux'
 import { bindActionCreators } from 'redux'

import { hasTrial, trialDaysLeft } from '../selectors/settings'
import { validateToken } from '../reducks/settings'
import ApiToken from '../components/api-token'

class ApiTokenContainer extends Component {
  state = {
    isLoading: false,
    failed: false
  }

  onInputBlur = async (e) => {
    const token = e.target.value
    this.setState({ failed: false, isLoading: true })

    try {
      await this.props.validateToken(token)
      this.setState({ failed: false, isLoading: false })
    } catch (e) {
      this.setState({ failed: true, isLoading: false })
    }
  }

  render() {
    const { isLoading, failed } = this.state
    const { hasPremium, hasTrial, trialDaysLeft } = this.props

    return (
      <ApiToken
        hasPremium={hasPremium}
        hasTrial={hasTrial}
        trialDaysLeft={trialDaysLeft}
        failed={failed}
        isLoading={isLoading}
        onInputBlur={this.onInputBlur}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    hasPremium: state.settings.data.apikey,
    hasTrial: hasTrial(state),
    trialDaysLeft: trialDaysLeft(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    validateToken: bindActionCreators(validateToken, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiTokenContainer)

