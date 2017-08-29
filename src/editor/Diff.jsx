import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Diff} from './components'

const mapStateToProps = (state, ownProps) => {
  const {project, branch} = ownProps.params

  return {
    definition: state.editor.current,
    original: state.editor.original,
    name: project,
    description: branch,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {project, branch, definition} = ownProps.params

  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Diff)
