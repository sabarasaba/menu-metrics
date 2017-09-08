import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'

import { fetchReport } from '../reducks/report'
import NavBar from '../components/navbar'

class NavBarContainer extends Component {
  onRefreshClick = (e) => {
    if (this.props.location.pathname === '/' && !this.props.isLoading) {
      e.preventDefault()
      this.props.fetchReport()
    }
  }

  render() {
    const {
      isLoading
    } = this.props

    return (
      <NavBar
        isLoading={isLoading}
        onRefreshClick={this.onRefreshClick}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.report.isLoading
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
