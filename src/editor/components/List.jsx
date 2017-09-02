import React from 'react'

import {uniq} from 'lodash'

class List extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {
    const {router, items, branchName, projectName, update} = this.props

    const projects = uniq(items.map(({project, branch}) => project))
    const branches = items.filter(item => item.project === projectName)

    return (

      <div className="columns">
        <div className="column">
          <section>
            <nav className="panel">
              <p className="panel-heading is-uppercase">
                <strong>Projects</strong>
              </p>
              {
                projects.map((project, i) => (
                  <a key={i} className={`panel-block ${projectName === project ? 'is-active' : null}`}
                     onClick={() => update(project)}>

              <span className="panel-icon">
                <i className="fa fa-cog"/>
              </span>

                    <strong
                      className={`${projectName === project ? 'has-text-primary' : null} is-uppercase`}>{project}</strong>
                  </a>
                ))
              }
            </nav>
          </section>
        </div>

        <div className={`column is-two-thirds ${branches.length === 0 ? 'is-hidden' : null}`}>
          <section>

            <nav className="panel">
              <p className="panel-heading">
                <strong className="is-uppercase">{`${projectName === null ? null : projectName}`}</strong> branches
              </p>
              {
                branches.map(({project, branch, versions}, i) => (
                  <a key={i} title="Click to select configuration file" onClick={() => {
                    const url = `/versions/${project}/${branch}/${versions[0].number}`
                    return router.replace(url)
                  }} className={`panel-block ${branchName === branch ? 'is-active' : null}`}>
                    <span className="panel-icon">
                    <i className="fa fa-star"/>
                    </span>
                    <span className={`${branchName === branch ? 'has-text-primary' : null}`}>
                    {branch} <em>{versions.length === 1 ? 'single version' : `${versions.length} versions`}</em>
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
