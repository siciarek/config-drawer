import React from 'react'
import PropTypes from 'prop-types'
import {map} from 'lodash'

const Sections = ({name, description, section, definition, selectSection}) => {
  return (
    <section>
      <nav className="panel">
        <p className="panel-heading">
          <strong>{name.toUpperCase()}</strong> {description}
        </p>
        {
          map(definition, (val, key) => {
            return (
              <a key={key} className={`panel-block ${section === key ? 'is-active' : null}`} onClick={() => selectSection(key)}>
              <span className="panel-icon">
                <i className={`fa ${section === key ? 'fa-check-square' : 'fa-square'}`}></i>
              </span>
                <span className={`${section === key ? 'has-text-primary' : null}`}>{key}</span>
              </a>
            )
          })
        }
      </nav>
    </section>
  )
}

Sections.propTypes = {
  definition: PropTypes.object,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

Sections.defaultProps = {
  name: 'Config',
  description: '',
}

export {Sections}