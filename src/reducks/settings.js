import storage from '../helpers/storage'

export const SET_SETTINGS = 'settings/SET_SETTINGS'

const initialState = {
  data: {
    apiKey: '',
    url: 'https://example.com/stats',
    interval: 5
  }
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
