import React, { Component } from 'react'

import { isAutolaunchEnabled, setAutolaunch } from '../reducks/settings'
import AutoLaunch from '../components/auto-launch'

class AutoLaunchContainer extends Component {
  state = {
    isEnabled: false
  }

  async componentDidMount() {
    const isEnabled = await isAutolaunchEnabled()

    this.setState({
      isEnabled
    })
  }

  onCheckboxToggle = (e) => {
    const isEnabled = !this.state.isEnabled

    setAutolaunch(isEnabled)
    this.setState({ isEnabled })
  }

  render() {
    const { isEnabled } = this.state

    return (
      <AutoLaunch
        isEnabled={isEnabled}
        onCheckboxToggle={this.onCheckboxToggle}
      />
    )
  }
}

export default AutoLaunchContainer
