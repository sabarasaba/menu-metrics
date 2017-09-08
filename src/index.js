import React from 'react'
import ReactDOM from 'react-dom'
import storage from './helpers/storage'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import App from './app'
import configureStore from './reducks/configureStore'

const bootstrap = async () => {
  const data = await storage.get('settings')
  const store = await configureStore({ settings: { data } })

  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>,
    document.getElementById('root')
  )
}

bootstrap()
