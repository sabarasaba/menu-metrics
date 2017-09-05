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
      //allowPointSelect: true,
      size: 40,
      //cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      //showInLegend: true
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
      y: 56.33
    }, {
      y: 24.03,
    }, {
      y: 10.38
    }]
  }]
}

export default ({ data }) => {
  return (
    <div className={cx('pieRoot')}>
      <HighCharts config={config} />
    </div>
  )
}



