import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {createProject} from './ProjectActions'
import {Creator} from './components'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    create: createProject,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Creator)
