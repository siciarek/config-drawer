import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {resetConfigDefinition, saveConfigDefinition,} from '../../editor/EditorActions'
import {jsonToIni} from '../Utils'

const Header = ({title, subtitle, menu, dirty, save, reset, project, branch, current}) => {


  return <section className="hero is-primary">
    <div className="section hero-body">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <h1 className="title">
              {title}
            </h1>
            <h2 className="subtitle">
              {subtitle}
            </h2>
          </div>
          <div className="column has-text-right">
            {
              dirty
                ? [
                  <button key={0}
                          onClick={() => save(project, branch, jsonToIni(current))}
                          type="button"
                          title="Save config"
                          className="button is-primary is-inverted is-large">
                    Save config
                  </button>,
                  <span key={1}>&nbsp;</span>,
                  <button key={2}
                          onClick={reset}
                          type="button"
                          title="Reset"
                          className="button is-primary is-inverted is-large">
                    Reset
                  </button>
                ]
                : null
            }
          </div>
        </div>
      </div>
    </div>
    <div className="hero-foot">
      <div className="container">
        <nav className="tabs is-boxed">
          {menu}
        </nav>
      </div>
    </div>
  </section>
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  save: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
}

Header.defaultProps = {
  title: 'Config drawer',
  subtitle: 'Configuration goes easy.',
}

const mapStateToProps = state => {
  return {
    dirty: JSON.stringify(state.editor.current) !== JSON.stringify(state.editor.original),
    current: state.editor.current,
    project: state.editor.project,
    branch: state.editor.branch,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return bindActionCreators({
    save: (project, branch, data) => saveConfigDefinition(project, branch, data),
    reset: resetConfigDefinition,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)