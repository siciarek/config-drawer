import React from 'react'
import PropTypes from 'prop-types'
import {difference, jsonToIni} from '../../app/Utils'

const parseValue = (val) => {
  switch (typeof val) {
    case 'string':
    case 'number':
      return val;
    case 'boolean':
      return JSON.stringify(val)
  }

  return `****************************** ${JSON.stringify(val)} [${typeof val}] ******************************`
}

const parseIniKeyValue = (key, val) => {
  if (Array.isArray(val)) {
    const output = val.map((v, i) => {
      return `${key}[]=${v}`
    })
    return output.join("\n")
  }
  return `${key}=${parseValue(val)}`
}

class Changes extends React.Component {

  render() {

    const {name, description, definition, original, router} = this.props

    if (!definition) {
      router.push('/')
      return null
    }

    if (JSON.stringify(definition) === JSON.stringify(original)) {
      return (
        <article className="message is-primary">
          <div className="message-header">
            <p>Info</p>
          </div>
          <div className="message-body">
            No changes have been detected.
          </div>
        </article>
      )
    }

    const changes = difference(definition, original)

    return (
      <div className="columns">
        <div className="column is-half">
        {jsonToIni(original, true, changes)}
        </div>
        <div className="column is-half">
        {jsonToIni(definition, true, changes)}
        </div>
      </div>
    )
  }
}

Changes.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  definition: PropTypes.object,
  original: PropTypes.object,
}

Changes.defaultProps = {
  name: 'Config',
  description: '',
}

export {Changes}