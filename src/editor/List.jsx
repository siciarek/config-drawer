import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchConfigList} from './EditorActions'
import {List} from './components'

const mapStateToProps = (state, ownProps) => {

  return {
    items: state.editor.list,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return bindActionCreators({
    init: fetchConfigList,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
