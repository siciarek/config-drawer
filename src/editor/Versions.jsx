import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  fetchConfigList,
  updateProject,
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

  return bindActionCreators({
    init: () => {

    }
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Versions)
