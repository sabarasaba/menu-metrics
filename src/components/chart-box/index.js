import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import LineChart from '../charts/Line'
import styles from './ChartBox.pss'

const electron = window.require('electron')
const cx = classNames.bind(styles)

const getChartComponent = ({ chartType, chartConfig }) => {
  return (
    <div className={cx('chart')}>
      {chartType === 'line' && <LineChart data={chartConfig} />}
    </div>
  )
}

const onClickBox = (link) => {
  if (link) {
    electron.remote.shell.openExternal(link)
  }
}

const ChartBox =  ({
  title,
  subtitle,
  linkTo,
  chartType,
  chartConfig
}) => {
  return (
    <div className={cx('root', { linkTo })} onClick={onClickBox.bind(this, linkTo)}>
      <div className={cx('content')}>
        <div className={cx('body')}>
          <h4>{title}</h4>
          <small>{subtitle}</small>
        </div>
        {getChartComponent({ chartType, chartConfig })}
      </div>
    </div>
  )
}

ChartBox.defaultProps = {
  chartType: 'line'
}

ChartBox.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  linkTo: PropTypes.string,
  chartType: PropTypes.string,
  chartConfig: PropTypes.object
}

export default ChartBox
