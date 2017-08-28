import React from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types';

const Home = (props) => {

  const configs = [
    {
      project: 'ino',
      branch: 'master',
    },
    {
      project: 'ino',
      branch: 'test',
    },
    {
      project: 'productcatalog',
      branch: 'master',
    },
    {
      project: 'productcatalog',
      branch: 'test',
    },
    {
      project: 'taskbox',
      branch: 'master',
    },
    {
      project: 'taskbox',
      branch: 'test',
    },
  ]

  const {router} = props

  return (
    <section>
      <nav className="panel">
        <p className="panel-heading">
          <strong>{`Config list`.toUpperCase()}</strong>
        </p>
        {
          configs.map(({project, branch}, i) => (
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

export default (Home)
