import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducer from './index'

const isBrowser = typeof window !== 'undefined'
const isDev = process.env.NODE_ENV !== 'production'

const devtools = isDev && isBrowser && window.devToolsExtension
  ? window.devToolsExtension
  : () => fn => fn

const configureStore = (initialState = {}) => {
  const enhancers = [
    applyMiddleware(
      ReduxThunk
    ),
    devtools()
  ]

  return createStore(reducer, initialState, compose(...enhancers))
}

export default configureStore

