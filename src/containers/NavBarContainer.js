import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'

import { hasTrial, trialDaysLeft } from '../selectors/settings'
import { checkUpdate } from '../reducks/settings'
import { fetchReport } from '../reducks/report'
import NavBar from '../components/navbar'

const electron = window.require('electron')

class NavBarContainer extends Component {
  onCloseApp = () => {
    electron.remote.app.exit()
  }

  onCheckUpdate = (e) => {
    e.stopPropagation()

    this.props.checkUpdate()
  }

  onBuyLicense = (e) => {
    e.preventDefault()

    electron.remote.shell.openExternal(process.env.REACT_APP_WEB_URI)
  }

  onRefreshClick = (e) => {
    if (this.props.location.pathname === '/' && !this.props.isLoading) {
      e.preventDefault()
      this.props.fetchReport()
    }
  }

  render() {
    const {
      hasTrial,
      trialDaysLeft,
      updatesLabel,
      isLoading,
      hasSettings
    } = this.props

    return (
      <NavBar
        hasTrial={hasTrial}
        trialDaysLeft={trialDaysLeft}
        updatesLabel={updatesLabel}
        hasSettings={hasSettings}
        isLoading={isLoading}
        onBuyLicense={this.onBuyLicense}
        onRefreshClick={this.onRefreshClick}
        onCheckUpdate={this.onCheckUpdate}
        onCloseApp={this.onCloseApp}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    hasTrial: hasTrial(state),
    trialDaysLeft: trialDaysLeft(state),
    isLoading: state.report.isLoading,
    hasSettings: state.settings.data.interval,
    updatesLabel: state.settings.checkingForUpdates
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchReport: bindActionCreators(fetchReport, dispatch),
    checkUpdate: bindActionCreators(checkUpdate, dispatch)
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)
)
