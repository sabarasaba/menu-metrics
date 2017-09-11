import storage from '../helpers/storage'
import { version } from '../../package.json'

export const SET_SETTINGS = 'settings/SET_SETTINGS'
export const SET_CHECKING_UPDATES = 'settings/SET_CHECKING_UPDATES'

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
  return dispatch => {
    dispatch({ type: SET_CHECKING_UPDATES, toggle: 'Checking for update..' })
    console.log(`Current version: ${version}`)
    dispatch({ type: SET_CHECKING_UPDATES, toggle: 'No new updates' })

    setTimeout(() => {
      dispatch({ type: SET_CHECKING_UPDATES, toggle: 'Check updates' })
    }, 120000)
  }
}
