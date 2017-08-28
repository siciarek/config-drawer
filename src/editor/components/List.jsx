import React from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types';

class List extends React.Component  {

  componentWillMount() {
    this.props.init()
  }

  render() {
    const {router, items} = this.props

    return (
      <section>
        <nav className="panel">
          <p className="panel-heading">
            <strong>{`Config list`.toUpperCase()}</strong>
          </p>
          {
            items.map(({project, branch}, i) => (
              <a key={i} className="panel-block" onClick={() => router.push(`/editor/${project}/${branch}`)}>
              <span className="panel-icon">
                <i className="fa fa-cog"></i>
              </span>
                <strong>{project.toUpperCase()}</strong>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {branch}
              </a>
            ))
          }
        </nav>
      </section>
    )
  }
}

export {List}
