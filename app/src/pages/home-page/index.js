import React from 'react'
import classNames from 'classnames/bind'
import HighCharts from 'react-highcharts'

import NumberText from '../../components/number-text'
import styles from './HomePage.pss'

const cx = classNames.bind(styles)

const config = {
  title: {
    text: null
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
  }]
}

export default () => {
  return (
    <div>
      <div className={cx('root')}>
        <div className="row-3">
          <NumberText number="67" text="Active Users" />
          <NumberText number="42" text="Current Users" />
          <NumberText number="17%" text="Bounce Rate" />
        </div>
      </div>

      <div className={cx('sparkline')}>
        <HighCharts config={config} />
      </div>
    </div>
  )
}


