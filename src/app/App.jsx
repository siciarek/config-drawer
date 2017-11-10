import React from 'react';
import {Header, Menu} from './components'
import {connect} from 'react-redux'
import {differenceCount} from './Utils'
import {Link} from 'react-router'

import './App.css'

const App = ({children, router, versions, project, changes, version, dirty = false}) => {

  const pathname = router.getCurrentLocation().pathname

  return <div>
    <Header menu={<Menu
      dirty={dirty}
      router={router}
      changes={changes}
      versions={versions}
      version={version}/>}/>

    <nav className="navbar has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <Link className={`navbar-item is-tab ${pathname === '/project/create' ? 'is-active' : ''}`} to="/project/create">
            New project
          </Link>
          <Link className={`navbar-item is-tab`} to="/project/create">
            Vaghina
          </Link>
          <Link className={`navbar-item is-tab ${pathname === '/test' ? 'is-active' : ''}`} to="/test">
            Test
          </Link>
          {!project || project === undefined ? null : <Link className="navbar-item is-tab">
            New&nbsp;<strong className="is-uppercase">{project}</strong>&nbsp;branch
          </Link>}
        </div>
      </div>
    </nav>

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
            The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website
            content
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
  const versions = typeof vtemp.versions === 'undefined' || !Array.isArray(vtemp.versions) ? [] : vtemp.versions

  return {
    project: state.editor.project,
    dirty: JSON.stringify(state.editor.current) !== JSON.stringify(state.editor.original),
    version: state.editor.version,
    changes: changes,
    versions: versions.length,
  }
}

export default connect(mapStateToProps)(App);
