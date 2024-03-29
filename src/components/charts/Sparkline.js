import React from 'react'
import classNames from 'classnames/bind'
import HighCharts from 'react-highcharts'

import styles from './Charts.pss'

const cx = classNames.bind(styles)

const getConfig = (payload) => {
  return {
    chart: {
      backgroundColor: null,
      borderWidth: 0,
      type: 'area',
      margin: [0, 0, 0, 0],
      height: 50,
      width: 130,
      spacingTop: 0,
      spacingBottom: 0,
      spacingLeft: 0,
      spacingRight: 0,
      style: {
        overflow: 'visible'
      },
      // small optimalization, saves 1-2 ms each sparkline
      skipClone: true
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
      labels: {
        enabled: false
      },
      title: {
        text: null
      },
      minPadding: 0,
      maxPadding: 0,
      startOnTick: false,
      endOnTick: false,
      tickPositions: []
    },
    yAxis: {
      endOnTick: false,
      startOnTick: false,
      labels: {
        enabled: false
      },
      title: {
        text: null
      },
      tickPositions: [0]
    },
    legend: {
      enabled: false
    },
    series: [{
      data: payload.data,
      pointStart: payload.pointStart
    }],
    colors: payload.colors,
    tooltip: {
      backgroundColor: null,
      borderWidth: 0,
      shadow: false,
      useHTML: true,
      hideDelay: 0,
      shared: true,
      padding: 0,
      headerFormat: '',
      pointFormat: '<b>{point.y}.0</b>'
    },
    plotOptions: {
      series: {
        animation: false,
        lineWidth: 1,
        shadow: false,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        marker: {
          radius: 1,
          states: {
            hover: {
              radius: 2
            }
          }
        },
        fillOpacity: 0.25
      },
      column: {
        negativeColor: '#910000',
        borderColor: 'silver'
      }
    }
  }
}

export default ({ data, reverse }) => {
  return (
    <div className={cx('sparklineRoot', { reverse })}>
      <HighCharts config={getConfig(data)} />
    </div>
  )
}
