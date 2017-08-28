import React from 'react'
import PropTypes from 'prop-types'
import {map} from 'lodash'

const Sections = ({name, description, definition, selectSection}) => {
  return (
    <section>
      <nav className="panel">
        <p className="panel-heading">
          <strong>{name.toUpperCase()}</strong> {description}
        </p>
        {
          map(definition, (val, key) => {
            return (
              <a key={key} className="panel-block" onClick={() => selectSection(key)}>
              <span className="panel-icon">
                <i className="fa fa-folder"></i>
              </span>
                {key}
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