import React from 'react'
import PropTypes from 'prop-types'
import {convertToIniFormat} from '../../app/Utils'

class Versions extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    const {project, branch, items, current, router, fetch, version} = this.props

    if (!project) {
      return null
    }

    const temp = items.filter(i => i.project === project && i.branch === branch)

    if (temp.count === 0) {
      router.push('/')
      return null
    }

    const xtemp = temp.pop()

    if (!xtemp) {
      router.push('/')
      return null
    }

    const {versions} = xtemp

    if (!versions) {
      router.push('/')
      return null
    }

    const configVersionPanel = version === 0
      ? null
      : <div className="column is-half">
        <section>
          <nav className="panel">
            <p className="panel-heading">
              <strong>{project.toUpperCase()}</strong> {branch} <strong>ver. {version}</strong>
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
                versions.map(({number, createdAt, createdBy}, i) => {
                  return <a key={i}
                            className={`panel-block ${version === number ? 'has-text-primary is-active' : null}`}
                            onClick={() => {
                              fetch(project, branch, number)
                            }}>
                    <span><strong>{number}</strong></span>
                    &nbsp; &nbsp; &nbsp;
                    <span>{createdAt}</span>
                    &nbsp; &nbsp; &nbsp;
                    <em>{createdBy}</em>
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