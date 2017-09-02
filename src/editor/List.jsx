import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchConfigList, updateProject} from './EditorActions'
import {List} from './components'

const mapStateToProps = (state, ownProps) => {

  return {
    projectName: state.editor.project,
    branchName: state.editor.branch,
    items: state.editor.list,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return bindActionCreators({
    update: (project, branch, version) => updateProject(project, branch, version),
    init: fetchConfigList,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
