import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import report from './report'
import settings from './settings'

const reducers = {
  form,
  report,
  settings
}

export default combineReducers(reducers)
