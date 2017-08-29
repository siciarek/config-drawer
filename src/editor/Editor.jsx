import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  fetchConfigDefinition,
  selectVariable,
  deselectVariable,
  updateVariable,
  updateProject,
} from './EditorActions'
import {Editor} from './components'

const mapStateToProps = (state, ownProps) => {
  const {project, branch} = ownProps.params

  return {
    definition: state.editor.current,
    name: project,
    description: branch,
    selectedVariable: state.editor.selected,
    dirty: JSON.stringify(state.editor.current) !== JSON.stringify(state.editor.original),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {project, branch} = ownProps.params

  return bindActionCreators({
    submit: updateVariable,
    deselect: deselectVariable,
    select: selectVariable,
    init: () => {
      dispatch(updateProject(project, branch))
      return fetchConfigDefinition(project, branch)
    }
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
