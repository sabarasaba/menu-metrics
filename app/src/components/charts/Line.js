import React from 'react'
import classNames from 'classnames/bind'
import HighCharts from 'react-highcharts'

import styles from './Charts.pss'

const cx = classNames.bind(styles)

const getConfig = (payload) => {
  return {
    chart: {
      height: 200,
      type: 'area',
      plotBorderWidth: 0,
      plotShadow: false,
      lineColor: 'transparent'
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    exporting: { enabled: false },
    credits: { enabled: false },
    legend: { enabled: false },
    yAxis: {
      title: {
        text: ''
      },
      gridLineColor: '#F0F0F0',
      gridLineWidth: 1,
      lineWidth: 1,
    },
    plotOptions: {
      borderWidth: 0,
      series: {
        pointStart: payload.pointStart
      }
    },
    series:[{
      name: 'Manufacturing',
      animation: false,
      data: payload.data
    }]
  }
}

export default ({ data, reverse }) => {
  return (
    <div className={cx('lineRoot', { reverse })}>
      <HighCharts config={getConfig(data)} />
    </div>
  )
}
