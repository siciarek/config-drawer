import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'

class Versions extends React.Component {

  componentWillMount() {
    this.props.init()
  }


  render() {

    const {project, branch, raw, items, current, router, fetch, version} = this.props


    if (!items.length > 0) {
      return null
    }

    const temp = items.filter(i => i.project === project && i.branch === branch)

    const xtemp = temp.pop()

    if (!xtemp) {
      return null
    }

    const {versions} = xtemp

    if (!versions) {
      return null
    }

    const configVersionPanel = version === 0
      ? null
      : <div className="column is-two-thirds">
        <section>
          <nav className="panel">
            <p className="panel-heading">
              <strong className="is-uppercase">{project}</strong> {branch} <strong>v{version}</strong>
            </p>
            <pre className="panel-block" style={{backgroundColor: 'transparent'}}>
              {raw}
            </pre>
          </nav>
        </section>
      </div>

    return (
      <div className="columns">
        <div className="column">

          <section>
            <nav className="panel">
              <p className="panel-heading">
                Versions of <strong className="is-uppercase">{project}</strong> {branch}
              </p>
              {
                versions.map(({number, createdAt, createdBy}, i) => <Link
                  key={i}
                  to={`/versions/${project}/${branch}/${number}`}
                  onClick={() => fetch(project, branch, number)}
                  className={`panel-block ${parseInt(version) === parseInt(number) ? 'has-text-primary is-active' : null}`}>
                  <span><strong>{number}</strong></span>&nbsp;&nbsp;&nbsp;<span>{createdAt}</span>&nbsp;&nbsp;&nbsp;
                  <em>{createdBy}</em>
                </Link>)
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