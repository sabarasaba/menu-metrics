import axios from 'axios'
import _ from 'lodash'

export const SET_REPORT = 'report/SET_REPORT'
export const SET_ERROR = 'report/SET_ERROR'
export const TOGGLE_LOADING = 'report/TOGGLE_LOADING'

const initialState = {
  config: [],
  isLoading: false,
  error: null
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

    case SET_ERROR:
      return {
        ...state,
        error: action.error
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
      const { data } = await axios.get(`${state.settings.data.url}?time=${Date.now()}`)

      if (_.isObject(data)) {
        dispatch({ type: SET_REPORT, config: data })
      } else {
        dispatch({ type: SET_ERROR, error: 'Endpoint response must be json' })
      }
    } catch (e) {
      dispatch({ type: SET_ERROR, error: 'Cant reach your endpoint' })
      console.log(e)
    }

    dispatch({ type: TOGGLE_LOADING, toggle: false })
  }
}
