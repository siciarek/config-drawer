import React from 'react'
import PropTypes from 'prop-types'
import {convertToIniFormat} from '../../app/Utils'

class Versions extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      version: 0
    }
  }

  render() {

    const {project, branch, items, current, router} = this.props

    if (!project) {
      router.push('/')
      return null
    }

    const temp = items.filter(i => i.project === project && i.branch === branch)

    if (temp.count === 0) {
      router.push('/')
      return null
    }

    const {versions} = temp.pop()

    if (!versions) {
      return null
    }

    const configVersionPanel = this.state.version === 0
    ? null
    : <div className="column is-half">
        <section>
          <nav className="panel">
            <p className="panel-heading">
              <strong>{project.toUpperCase()}</strong> {branch} <strong>ver. {this.state.version}</strong>
            </p>
            <pre className="panel-block" style={{backgroundColor: 'transparent'}}>
              {convertToIniFormat(current)}
            </pre>
          </nav>
        </section>
      </div>

    return (
      <div className="columns">
        <div className="column is-half">

          <section>
            <nav className="panel">
              <p className="panel-heading">
                Versions of <strong>{project.toUpperCase()}</strong> {branch}
              </p>
              {
                versions.map((version, i) => {
                  return <a key={i} className={`panel-block ${this.state.version === version.number ? 'has-text-primary is-active' : null}`} onClick={() => this.setState({version: version.number})}>
                    <span><strong>{version.number}</strong></span>
                    &nbsp; &nbsp; &nbsp;
                    <span>{version.createdAt}</span>
                    &nbsp; &nbsp; &nbsp;
                    <span><em>{version.createdBy}</em>&nbsp;&nbsp;&nbsp;{i === 0 ? '<current>' : null }</span>
                  </a>
                })
              }
            </nav>
          </section>
        </div>
        {configVersionPanel}
      </div>
    )
  }
}

Versions.propTypes = {
  project: PropTypes.string,
  branch: PropTypes.string,
}

Versions.defaultProps = {}

export {Versions}