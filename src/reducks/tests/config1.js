export default [
  {
    type: 'longbox',
    title: '60%',
    smallTitle: 'increase',
    subtitle: '21 shipped',
    chartType: 'pie',
    chartConfig: {
      colors: [
        '#0CC2AA',
        '#F1F2F3'
      ],
      data: [{
        y: 60.00
      }, {
        y: 40.00
      }]
    }
  },
  {
    type: 'longbox',
    title: '25%',
    smallTitle: 'decrease',
    subtitle: '623 activities',
    chartType: 'sparkline',
    chartConfig: {
      colors: [ '#A88ADD' ],
      pointStart: 1,
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4],
    }
  },
  {
    type: 'longbox',
    title: '75',
    smallTitle: 'sales',
    subtitle: '6 awaiting payment',
    icon: 'shopping_basket'
  },
  {
    type: 'chartbox',
    title: 'Line with fill',
    subtitle: 'Simple Usage',
    chartType: 'line',
    chartConfig: {
      pointStart: 2001,
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }
  },
  {
    type: 'longbox',
    title: '40',
    smallTitle: 'orders',
    subtitle: '38 shipped',
    icon: 'shopping_basket',
    theme: 'primary'
  },
  {
    type: 'longbox',
    title: '6.000',
    smallTitle: 'members',
    subtitle: '632 active',
    icon: 'people',
    theme: 'secondary'
  },
  {
    type: 'longbox',
    title: '72',
    smallTitle: 'comments',
    subtitle: '17 approved',
    icon: 'comment',
    reverse: true
  },
  {
    type: 'longbox',
    title: '17',
    smallTitle: 'sockets',
    subtitle: '2 listening',
    icon: 'phone',
    iconTheme: 'secondary',
    reverse: true
  },
  {
    type: 'longbox',
    title: '72',
    smallTitle: 'comments',
    subtitle: '17 approved',
    icon: 'error',
    theme: 'error',
    reverse: true
  },
  {
    type: 'longbox',
    title: '72',
    smallTitle: 'comments',
    subtitle: '17 approved',
    icon: 'warning',
    theme: 'warning'
  },
]
