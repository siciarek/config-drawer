import React from 'react';
import {Header} from './components'
import {Menu} from './components'
import {connect} from 'react-redux'
import {differenceCount} from './Utils'

const App = ({children, router, versions, diffs}) => {

  return (
    <div>
      <Header/>
      <Menu router={router} diffs={diffs} versions={versions}/>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const diffs = differenceCount(state.editor.original, state.editor.current)
  const temp = state.editor.list.filter(item => item.project === state.editor.project && item.branch === state.editor.branch)

  const vtemp = temp.length > 0 ? temp.pop() : {}
  const versions = typeof vtemp.versions === 'undefined' ? [] : vtemp.versions

  return {
    diffs: diffs,
    versions: versions.length,
  }
}

export default connect(mapStateToProps)(App);
