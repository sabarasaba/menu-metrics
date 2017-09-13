import { createSelector } from 'reselect'
import moment from 'moment'

export const TRIAL_DURATION = 14

export const getSettings = state => state.settings.data

export const hasTrial = createSelector(
  getSettings,
  (settings = {}) => {
    const trialExpiration = moment(settings.installed).add(TRIAL_DURATION, 'days')
    const whithinTrial = trialExpiration.isAfter(moment())

    return !settings.apiKey && whithinTrial
  }
)

export const trialDaysLeft = createSelector(
  getSettings,
  (settings = {}) => {
    const trialExpiration = moment(settings.installed).add(TRIAL_DURATION, 'days')

    return trialExpiration.diff(moment(), 'days')
  }
)
