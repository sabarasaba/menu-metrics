import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import PieChart from '../charts/Pie'
import styles from './LongBox.pss'

const cx = classNames.bind(styles)

const getIconComponent = ({icon, iconTheme, chartType, reverse}) => {
  if (chartType === 'pie') {
    return (
      <PieChart reverse={reverse} />
    )
  }

  return (
    <div className={cx('icon', iconTheme)}>
      <i className={cx('material-icons')}>{icon}</i>
    </div>
  )
}

const LongBox =  ({
  title,
  smallTitle,
  subtitle,
  icon,
  iconTheme,
  theme,
  reverse,
  chartType
}) => {
  return (
    <div className={cx('root', theme)}>
      <div className={cx('content', { reverse })}>
        {getIconComponent({ icon, iconTheme, chartType, reverse})}
        <div className={cx('body')}>
          <h4>{title} <span>{smallTitle}</span></h4>
          <small>{subtitle}</small>
        </div>
      </div>
    </div>
  )
}

LongBox.defaultProps = {
  theme: 'default'
}

LongBox.propTypes = {
  title: PropTypes.string,
  smallTitle: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
  iconTheme: PropTypes.string,
  theme: PropTypes.string,
  reverse: PropTypes.bool,
  chartType: PropTypes.string
}

export default LongBox
