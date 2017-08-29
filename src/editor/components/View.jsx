import React from 'react'
import PropTypes from 'prop-types'

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

const parseKeyValue = (key, val) => {
  if (Array.isArray(val)) {
    const output = val.map((v, i) => {
      return `${key}[]=${v}`
    })
    return output.join("\n")
  }
  return `${key}=${parseValue(val)}`
}

class View extends React.Component {

  render() {

    const {name, description, definition, router} = this.props

    if (!definition) {
      router.push('/')
      return null
    }

    return (
      <pre className="panel-block">
          {
            `; Application configuration file: project=${name}, branch=${description}
; Version: 1

`
          }
        {
          Object.keys(definition).map((key, i) => {
            const value = definition[key]
            const section = `[${key}]`
            const values = Object.keys(value).map((key, i) => {
              return parseKeyValue(key, value[key])
            })

            const temp = values.join("\n")
            const sectionValues = temp.length === 0 ? '; SECTION IS EMPTY' : temp

            return `${section}\n${sectionValues}\n\n`
          })
        }
        </pre>
    )
  }
}

View.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  definition: PropTypes.object,
}

View.defaultProps = {
  name: 'Config',
  description: '',
}

export {View}