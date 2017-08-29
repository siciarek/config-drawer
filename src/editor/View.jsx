import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {View} from './components'

const mapStateToProps = (state, ownProps) => {
  const {project, branch} = ownProps.params

  return {
    definition: state.editor.current,
    name: project,
    description: branch,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {project, branch, definition} = ownProps.params

  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
