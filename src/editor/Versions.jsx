import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  fetchConfigList,
  updateProject,
  fetchConfigDefinition,
} from './EditorActions'
import {Versions} from './components'

const mapStateToProps = (state, ownProps) => {

  return {
    project: state.editor.project,
    branch: state.editor.branch,
    version: state.editor.version,
    items: state.editor.list,
    current: state.editor.current, // TODO: wyświetlać prawdziwe wersje
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {project, branch, version} = ownProps.params

  return bindActionCreators({
    init: () => {
      dispatch(updateProject(project, branch, version))
      return fetchConfigDefinition(project, branch, version)
    },
    fetch: (project, branch, version) => {
      dispatch(updateProject(project, branch, version))
      return fetchConfigDefinition(project, branch, version)
    }
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Versions)
