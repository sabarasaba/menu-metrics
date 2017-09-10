import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'

import { fetchReport } from '../reducks/report'
import NavBar from '../components/navbar'

const electron = window.require('electron')

class NavBarContainer extends Component {
  onCloseApp = () => {
    electron.remote.app.exit()
  }

  onRefreshClick = (e) => {
    if (this.props.location.pathname === '/' && !this.props.isLoading) {
      e.preventDefault()
      this.props.fetchReport()
    }
  }

  render() {
    const {
      isLoading,
      hasSettings
    } = this.props

    return (
      <NavBar
        hasSettings={hasSettings}
        isLoading={isLoading}
        onRefreshClick={this.onRefreshClick}
        onCloseApp={this.onCloseApp}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.report.isLoading,
    hasSettings: state.settings.data.interval
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchReport: bindActionCreators(fetchReport, dispatch)
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)
)
