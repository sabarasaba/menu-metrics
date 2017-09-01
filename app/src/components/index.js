import React, { Component } from 'react'
import classNames from 'classnames/bind'
import styles from './test.pss'

const cx = classNames.bind(styles)

class App extends Component {
  render() {
    return (
      <div className={cx('root')}>
        To get started, edit <code>src/App.js</code> and save to reload.
      </div>
    );
  }
}

export default App

