import React from 'react'
import classNames from 'classnames/bind'
import HighCharts from 'react-highcharts'

import styles from './Charts.pss'

const cx = classNames.bind(styles)

const config = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    height: 50,
    width: 50,
    center: ["50%", "100%"],
    margin: 0,
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 0,
    spacingRight: 0,
  },
  title: {
    text: ''
  },
  exporting: { enabled: false },
  credits: {
    enabled: false
  },
  legend: {
    enabled: false
  },
  tooltip: {
    headerFormat: '',
    padding: 2,
    pointFormat: '<b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      showInLegend: false,
      allowPointSelect: false,
      size: 40,
      dataLabels: {
        enabled: false
      },
      colors: [
        '#0CC2AA',
        '#F1F2F3'
      ]
    }
  },
  series: [{
    animation: false,
    states: {
      hover: {
        halo: {
          size: 3
        }
      }
    },
    data: [{
      y: 60.00
    }, {
      y: 40.00
    }]
  }]
}

export default ({ data, reverse }) => {
  return (
    <div className={cx('pieRoot', { reverse })}>
      <HighCharts config={config} />
    </div>
  )
}



