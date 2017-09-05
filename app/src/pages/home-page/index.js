import React from 'react'
import classNames from 'classnames/bind'

import ChartBox from '../../components/chart-box'
import LongBox from '../../components/long-box'
import styles from './HomePage.pss'

const cx = classNames.bind(styles)

export default () => {
  return (
    <div className={cx('root')}>
      <ChartBox
        title="Line with fill"
        subtitle="Simple usage"
        chartType="line"
        chartConfig={{
          pointStart: 2001,
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }}
      />

      <LongBox
        title="25%"
        smallTitle="decrease"
        subtitle="623 activities"
        chartType="sparkline"
        chartConfig={{
          colors: [ '#A88ADD' ],
          pointStart: 1,
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4],
        }}
      />

      <LongBox
        title="60%"
        smallTitle="increase"
        subtitle="21 Shipped"
        chartType="pie"
        chartConfig={{
          colors: [
            '#0CC2AA',
            '#F1F2F3'
          ],
          data: [{
            y: 60.00
          }, {
            y: 40.00
          }]
        }}
      />

      <LongBox
        title="75"
        smallTitle="sales"
        subtitle="6 awaiting payment"
        icon="shopping_basket"
      />

      <LongBox
        title="40"
        smallTitle="orders"
        subtitle="38 shipped"
        icon="shopping_basket"
        theme="primary"
      />

      <LongBox
        title="6,000"
        smallTitle="members"
        subtitle="632 active"
        icon="people"
        theme="secondary"
      />

      <LongBox
        title="72"
        smallTitle="comments"
        subtitle="17 approved"
        icon="comment"
        reverse
      />

      <LongBox
        title="17"
        smallTitle="sockets"
        subtitle="2 listening"
        icon="phone"
        iconTheme="secondary"
        reverse
      />

      <LongBox
        title="72"
        smallTitle="comments"
        subtitle="17 approved"
        icon="warning"
        theme="warning"
      />

      <LongBox
        title="72"
        smallTitle="comments"
        subtitle="17 approved"
        icon="error"
        theme="error"
        reverse
      />
    </div>
  )
}

