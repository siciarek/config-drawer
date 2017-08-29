import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {saveConfigDefinition} from '../../editor/EditorActions'

const Header = ({title, subtitle, dirty, save, project, branch, current}) =>
  <section className="hero is-primary">
    <div className="hero-body">
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
                ? <button
                  onClick={() => save(project, branch, current)}
                  type="button"
                  title="Save config"
                  className="button is-primary is-inverted is-large">
                  Save config
                </button>
                : null
            }
          </div>
        </div>
      </div>
    </div>
  </section>

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

Header.defaultProps = {
  title: 'Config drawer',
  subtitle: 'Smart configuration management tool',
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
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)