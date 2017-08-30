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
    version: state.editor.version,
    definition: state.editor.current,
    name: project,
    description: branch,
    selectedVariable: state.editor.selectedVariable,
    dirty: JSON.stringify(state.editor.current) !== JSON.stringify(state.editor.original),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {project, branch} = ownProps.params

  return bindActionCreators({
    submit: updateVariable,
    deselect: deselectVariable,
    select: selectVariable,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
