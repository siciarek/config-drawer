import React from 'react';
import {Header} from './components'
import {Menu} from './components'
import {connect} from 'react-redux'
import {differenceCount} from './Utils'

const App = ({children, router, versions, changes, version}) => {

  return (
    <div>
      <Header menu={<Menu router={router} changes={changes} versions={versions} version={version}/>}/>
      <section className="section">
        <div className="container">
          {children}
        </div>
      </section>
      <br/>
      <br/>
    </div>
  )
}

const mapStateToProps = (state) => {
  const changes = differenceCount(state.editor.original, state.editor.current)
  const temp = state.editor.list.filter(item => item.project === state.editor.project && item.branch === state.editor.branch)

  const vtemp = temp.length > 0 ? temp.pop() : {}
  const versions = typeof vtemp.versions === 'undefined' ? [] : vtemp.versions

  return {
    version: state.editor.version,
    changes: changes,
    versions: versions.length,
  }
}

export default connect(mapStateToProps)(App);
