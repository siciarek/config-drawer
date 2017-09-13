import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {createProject} from './ProjectActions'
import {Creator} from './components'

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    create: createProject,
    cancel: () => ownProps.router.push('/')
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Creator)
