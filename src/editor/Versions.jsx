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
    items: state.editor.list,
    current: state.editor.current, // TODO: wyświetlać prawdziwe wersje
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {project, branch} = ownProps.params

  return bindActionCreators({
    init: () => {
      dispatch(updateProject(project, branch))
      return fetchConfigDefinition(project, branch)
    },
    fetch: (project, branch, version) => fetchConfigDefinition(project, branch, version)
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Versions)
