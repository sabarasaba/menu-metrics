import axios from 'axios'
import config from './tests/config1'

export const SET_REPORT = 'report/SET_REPORT'
export const TOGGLE_LOADING = 'report/TOGGLE_LOADING'

const initialState = {
  config,
  isLoading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_REPORT:
      return {
        ...state,
        config: action.config
      }

    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.toggle
      }

    default:
      return state
  }
}

export function fetchReport() {
  return async (dispatch, getState) => {
    const state = getState()

    dispatch({ type: TOGGLE_LOADING, toggle: true })

    try {
      const config = await axios.get(state.settings.data.url)
      dispatch({ type: SET_REPORT, config })
    } catch (e) {
      console.log(e)
    }

    dispatch({ type: TOGGLE_LOADING, toggle: false })
  }
}
