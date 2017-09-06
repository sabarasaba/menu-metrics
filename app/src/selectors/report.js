import { createSelector } from 'reselect'
import _ from 'lodash'
import shortid from 'shortid'

export const getReport = state => state.report.config

export const getParsedReport = createSelector(
  getReport,
  (report) => {
    return report.map(e => {
      return {
        type: e.type,
        id: shortid.generate(),
        props: _.omit(e, ['type'])
      }
    })
  }
)
