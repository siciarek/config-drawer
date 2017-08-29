import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {View} from './components'
import {
  fetchConfigDefinition,
  updateProject,
} from './EditorActions'

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
    init: () => {
      dispatch(updateProject(project, branch))
      return fetchConfigDefinition(project, branch)
    }
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
