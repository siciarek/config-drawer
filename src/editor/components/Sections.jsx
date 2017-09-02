import React from 'react'
import PropTypes from 'prop-types'
import {map} from 'lodash'

const Sections = ({project, branch, section, definition, selectSection}) => {

  return (
    <section>
      <nav className="panel">
        <p className="panel-heading">
          <strong className="is-uppercase">{project}</strong> {branch}
        </p>
        {
          map(definition, (val, key) =>
            <a key={key} className={`panel-block ${section === key ? 'is-active' : null}`}
               onClick={() => selectSection(key)}>
              <span className="panel-icon"><i
                className={`fa ${section === key ? 'fa-check-square' : 'fa-square'}`}/></span>
              <span className={`${section === key ? 'has-text-primary' : null}`}>{key}</span>
            </a>
          )
        }
      </nav>
    </section>
  )
}

Sections.propTypes = {
  definition: PropTypes.object,
  project: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

Sections.defaultProps = {
  project: 'Config',
  description: '',
}

export {Sections}