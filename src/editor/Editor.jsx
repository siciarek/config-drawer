import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchConfigDefinition, fetchConfigList, deselectVariable, selectVariable, updateVariable, updateProject} from './EditorActions'
import {Editor} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    project: ownProps.params.project,
    branch: ownProps.params.branch,
    version: ownProps.params.version,
    section: state.editor.section,
    definition: state.editor.current,
    selectedVariable: state.editor.selectedVariable,
    dirty: JSON.stringify(state.editor.current) !== JSON.stringify(state.editor.original),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {project, branch, version, section} = ownProps.params

  return bindActionCreators({
    init: () => {
      dispatch(updateProject(project, branch, version, section))
      return fetchConfigDefinition(project, branch, version)
    },
    update: (project, branch, version, section) => updateProject(project, branch, version, section),
    submit: updateVariable,
    deselect: deselectVariable,
    select: selectVariable,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
