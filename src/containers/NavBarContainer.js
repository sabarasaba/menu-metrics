import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

import NavBar from '../components/navbar'

class NavBarContainer extends Component {
  render() {
    return (
      <NavBar />
    )
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps() {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)
