import axios from 'axios'
import moment from 'moment'
import compare from 'semver-compare'
import storage from '../helpers/storage'
import { version } from '../../package.json'

export const SET_SETTINGS = 'settings/SET_SETTINGS'
export const SET_CHECKING_UPDATES = 'settings/SET_CHECKING_UPDATES'

const SERVER_URL = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_WEB_URI_DEV
  : process.env.REACT_APP_WEB_URI

const electron = window.require('electron')

const initialState = {
  data: {
    apiKey: '',
    url: 'https://example.com/stats',
    interval: 5
  },
  checkingForUpdates: 'Check updates'
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SETTINGS:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.values
        }
      }

    case SET_CHECKING_UPDATES:
      return {
        ...state,
        checkingForUpdates: action.toggle
      }

    default:
      return state
  }
}

export function setSettings(values) {
  return dispatch => {
    storage.set('settings', JSON.stringify(values))

    dispatch({
      type: SET_SETTINGS,
      values
    })
  }
}

export function checkUpdate() {
  return async dispatch => {
    dispatch({ type: SET_CHECKING_UPDATES, toggle: 'Checking for update..' })

    try {
      const { data } = await axios.get(`${SERVER_URL}/version`)

      // a > b => 1
      if (compare(data.version, version) === 1) {
        debugger
        dispatch({ type: SET_CHECKING_UPDATES, toggle: 'Check updates' })
        electron.remote.shell.openExternal(`${SERVER_URL}`)
      } else {
        dispatch({ type: SET_CHECKING_UPDATES, toggle: 'No new updates' })
      }
    } catch (e) {
      dispatch({ type: SET_CHECKING_UPDATES, toggle: 'No new updates' })
    }

    setTimeout(() => {
      dispatch({ type: SET_CHECKING_UPDATES, toggle: 'Check updates' })
    }, 120000)
  }
}

export function saveToken(token) {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get(`${SERVER_URL}/validate`, {
          params: {
            token
          }
        })

        if (data.ok) {
          const settings = getState().settings.data

          await storage.set('settings', JSON.stringify({
            ...settings,
            apiKey: token
          }))

          resolve()
        } else {
          reject()
        }
      } catch (e) {
        reject()
      }
    })
  }
}

export function beginTrial() {
  return (dispatch, getState) => {
    const settings = getState().settings.data

    storage.set('settings', JSON.stringify({
      ...settings,
      installed: moment().format()
    }))
  }
}

export function sendFeedback(values) {
  return async dispatch => {
    try {
      await axios.post(`${SERVER_URL}/feedback`, values)
    } catch (e) {  }
  }
}
