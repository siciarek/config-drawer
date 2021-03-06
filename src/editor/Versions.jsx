import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchConfigDefinition, fetchConfigList, updateProject,} from './EditorActions'
import {Versions} from './components'

const mapStateToProps = (state, ownProps) => {

  return {
    project: state.editor.project,
    branch: state.editor.branch,
    version: state.editor.version,
    raw: state.editor.raw,
    items: state.editor.list,
    current: state.editor.current, // TODO: wyświetlać prawdziwe wersje
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {project, branch, version} = ownProps.params

  return bindActionCreators({
    init: () => {
      dispatch(fetchConfigList())
      dispatch(updateProject(project, branch, version))
      return fetchConfigDefinition(project, branch, version)
    },
    fetch: (project, branch, version) => {
      dispatch(fetchConfigList())
      dispatch(updateProject(project, branch, version))
      return fetchConfigDefinition(project, branch, version)
    }
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Versions)
