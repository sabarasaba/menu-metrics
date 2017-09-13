import axios from 'axios'
import moment from 'moment'
import compare from 'semver-compare'
import storage from '../helpers/storage'
import { version } from '../../package.json'

export const SET_SETTINGS = 'settings/SET_SETTINGS'
export const SET_CHECKING_UPDATES = 'settings/SET_CHECKING_UPDATES'

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
      const { data } = await axios.get(`${process.env.REACT_APP_UPDATE_URI}/version`)

      if (compare(data.version, version) === -1) {
        dispatch({ type: SET_CHECKING_UPDATES, toggle: 'Check updates' })
        electron.remote.shell.openExternal('https://json-menu.com/download')
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

export function validateToken(token) {
  return dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_UPDATE_URI}/validate`)

        console.log(data);

        data.ok ? resolve() : reject()
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
