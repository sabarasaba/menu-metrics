import React from 'react'
import classNames from 'classnames/bind'
import HighCharts from 'react-highcharts'

import NumberText from '../../components/number-text'
import styles from './HomePage.pss'

const cx = classNames.bind(styles)

const config = {
  chart: {
    backgroundColor: null,
    borderWidth: 0,
    type: 'area',
    margin: [0, 0, 0, 0],
    height: 200,
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
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4],
    pointStart: 1
  }],
  colors: [ '#FFFFFF' ],
  tooltip: {
    backgroundColor: null,
    borderWidth: 0,
    shadow: false,
    useHTML: true,
    hideDelay: 0,
    shared: true,
    padding: 0,
    headerFormat: '<span style="font-size: 10px">Price: Q{point.x}:</span><br/>',
    pointFormat: '<b>{point.y}.000</b> USD'
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


