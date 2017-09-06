import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import './app.css'

import NavBarContainer from './containers/NavBarContainer'
import HomePage from './pages/home-page'
import SettingsPage from './pages/settings-page'
import NotFoundPage from './pages/not-found'

const App = () => {
  return (
    <div>
      <NavBarContainer />
      <div className="app">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={SettingsPage} />

          { /* Catch all unmatched routes */ }
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  )
}

export default withRouter(App)
