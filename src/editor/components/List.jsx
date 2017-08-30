import React from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types';
import {uniq} from 'lodash'

class List extends React.Component {

  componentWillMount() {
    this.props.init()
    this.state = {
      project: null,
    }
  }

  render() {
    const {router, items} = this.props

    const projects = uniq(items.map(({project, branch}) => project))
    const branches = items.filter(item => item.project === this.state.project)

    return (
      <div className="columns">
        <div className="column is-half">
          <section>
            <nav className="panel">
              <p className="panel-heading">
                <strong>{`Projects`.toUpperCase()}</strong>
              </p>
              {
                projects.map((project, i) => (
                  <a key={i} className={`panel-block ${this.state.project === project ? 'is-active' : null}`} onClick={() => this.setState({project})}>

              <span className="panel-icon">
                <i className="fa fa-cog"/>
              </span>
                    <strong className={`${this.state.project === project ? 'has-text-primary' : null}`} >{project.toUpperCase()}</strong>
                  </a>
                ))
              }
            </nav>
          </section>
        </div>

        <div className={`column ${branches.length === 0 ? 'is-hidden' : null}`}>
          <section>
            <nav className="panel">
              <p className="panel-heading">
                <strong>{`${this.state.project === null ? null : this.state.project.toUpperCase()} branches`}</strong>
              </p>
              {
                branches.map(({project, branch, versions: {length}}, i) => (
                  <a key={i} className="panel-block" title="Click to select configuration file"
                     onClick={() => router.push(`/versions/${project}/${branch}`)}>
                     <span className="panel-icon">
                      <i className="fa fa-star"/>
                    </span>
                    <span>
                      {branch} <em className="has-text-grey-light">{length === 1 ? '1 version' : `${length} versions`}</em>
                    </span>
                  </a>
                ))
              }
            </nav>
          </section>
        </div>
      </div>
    )
  }
}

export {List}
