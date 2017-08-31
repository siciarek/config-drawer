import React from 'react';
import {Header} from './components'
import {Menu} from './components'
import {connect} from 'react-redux'
import {differenceCount} from './Utils'

const App = ({children, router, versions, changes, version, dirty = false}) => {

  return <div>
    <Header menu={<Menu
      dirty={dirty}
      router={router}
      changes={changes}
      versions={versions}
      version={version}/>}/>
    <section className="section">
      <div className="container">
        {children}
      </div>
    </section>
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong>Config drawer</strong> by <a href="http://github.com/siciarek">Jacek Siciarek</a>.
            The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
          </p>
          <p>
            <a className="icon" href="https://github.com/siciarek/config-drawer">
              <i className="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
}

const mapStateToProps = (state) => {
  const changes = differenceCount(state.editor.original, state.editor.current)
  const temp = state.editor.list.filter(item => item.project === state.editor.project && item.branch === state.editor.branch)

  const vtemp = temp.length > 0 ? temp.pop() : {}
  const versions = typeof vtemp.versions === 'undefined' ? [] : vtemp.versions

  return {
    dirty: JSON.stringify(state.editor.current) !== JSON.stringify(state.editor.original),
    version: state.editor.version,
    changes: changes,
    versions: versions.length,
  }
}

export default connect(mapStateToProps)(App);
