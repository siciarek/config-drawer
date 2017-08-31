import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {deselectVariable, selectVariable, updateVariable,} from './EditorActions'
import {Editor} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.editor.project,
    branch: state.editor.branch,
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
