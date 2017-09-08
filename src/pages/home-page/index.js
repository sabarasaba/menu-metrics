import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'

import ChartBox from '../../components/chart-box'
import LongBox from '../../components/long-box'
import { getParsedReport } from '../../selectors/report'
import styles from './HomePage.pss'

const cx = classNames.bind(styles)

const HomePage = ({ report }) => {
  return (
    <div className={cx('root')}>
      {report.map(e => (
        <div key={e.id}>
          {e.type === 'longbox' ? <LongBox {...e.props} /> : null}
          {e.type === 'chartbox' ? <ChartBox {...e.props} /> : null}
        </div>
      ))}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    report: getParsedReport(state)
  }
}

export default connect(mapStateToProps)(HomePage)