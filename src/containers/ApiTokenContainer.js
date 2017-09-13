import React, { Component } from 'react'
import { connect } from 'react-redux'
 import { bindActionCreators } from 'redux'

import { hasTrial, trialDaysLeft } from '../selectors/settings'
import { saveToken } from '../reducks/settings'
import ApiToken from '../components/api-token'

class ApiTokenContainer extends Component {
  state = {
    isLoading: false,
    failed: false,
    inputValue: ''
  }

  componentDidMount() {
    this.setState({
      inputValue: this.props.apiKey
    })
  }

  onInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  onInputBlur = async (e) => {
    const token = e.target.value
    this.setState({ failed: false, isLoading: true })

    try {
      await this.props.saveToken(token)
      this.setState({ failed: false, isLoading: false })
    } catch (e) {
      this.setState({ failed: true, isLoading: false })
    }
  }

  render() {
    const { inputValue, isLoading, failed } = this.state
    const { apiKey, hasTrial, trialDaysLeft } = this.props

    return (
      <ApiToken
        inputValue={inputValue}
        apiKey={apiKey}
        hasTrial={hasTrial}
        trialDaysLeft={trialDaysLeft}
        failed={failed}
        isLoading={isLoading}
        onInputChange={this.onInputChange}
        onInputBlur={this.onInputBlur}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    apiKey: state.settings.data.apiKey,
    hasTrial: hasTrial(state),
    trialDaysLeft: trialDaysLeft(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveToken: bindActionCreators(saveToken, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiTokenContainer)

