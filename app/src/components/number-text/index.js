import React from 'react'

import * as styles from './styles.js'

export default ({ number, text }) => {
  return (
    <div className={styles.root}>
      <div className={styles.number}>
        {number}
      </div>
      <div className={styles.text}>
        {text}
      </div>
    </div>
  )
}

