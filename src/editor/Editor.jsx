import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  fetchConfigDefinition,
  selectVariable,
  deselectVariable,
} from './EditorActions'
import {Editor} from './components'

const mapStateToProps = (state, ownProps) => {
  const {project, branch} = ownProps.params

  return {
    definition: state.editor.current,
    name: project,
    description: branch,
    selectedVariable: state.editor.selected,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {project, branch} = ownProps.params

  return bindActionCreators({
    deselect: deselectVariable,
    select: selectVariable,
    init: () => fetchConfigDefinition(project, branch),
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
