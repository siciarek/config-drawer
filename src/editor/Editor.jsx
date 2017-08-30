import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  selectVariable,
  deselectVariable,
  updateVariable,
} from './EditorActions'
import {Editor} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.editor.project,
    description: state.editor.branch,
    version: state.editor.version,
    definition: state.editor.current,
    selectedVariable: state.editor.selectedVariable,
    dirty: JSON.stringify(state.editor.current) !== JSON.stringify(state.editor.original),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    submit: updateVariable,
    deselect: deselectVariable,
    select: selectVariable,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
