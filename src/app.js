import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter, Switch, Route } from 'react-router-dom'
import './app.css'

import { hasTrial } from './selectors/settings'
import { beginTrial } from './reducks/settings'
import { fetchReport } from './reducks/report'
import NavBarContainer from './containers/NavBarContainer'
import HomePage from './pages/home-page'
import SettingsPage from './pages/settings-page'
import ExpiredPage from './pages/expired-page'
import NotFoundPage from './pages/not-found'

class App extends Component {
  componentDidMount() {
    if (this.props.interval) {
      this.onTick()

      if (!this.props.hasTrial && !this.props.hasApiKey) {
        this.props.history.push('/expired')
      }
    } else {
      this.props.beginTrial()
      this.props.history.push('/settings')
    }
  }

  onTick = () => {
    setTimeout(() => {
      this.props.fetchReport()
      this.onTick()
    }, this.props.interval * 60000)
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        <div className="app">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/settings" exact component={SettingsPage} />
            <Route path="/expired" exact component={ExpiredPage} />

            { /* Catch all unmatched routes */ }
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    interval: state.settings.data.interval,
    hasApiKey: state.settings.data.apiKey,
    hasTrial: hasTrial(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchReport: bindActionCreators(fetchReport, dispatch),
    beginTrial: bindActionCreators(beginTrial, dispatch)
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
)
