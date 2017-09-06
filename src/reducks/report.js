import config from './tests/config1'

export const FETCH_REPORT = 'report/FETCH_REPORT'

const initialState = {
  config,
  isLoading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

