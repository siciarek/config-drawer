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

class Diff extends React.Component {

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
            No changes detected.
          </div>
        </article>
      )
    }

    return (
      <div className="columns">
        <div className="column is-half">
      <pre className="panel-block">
          {
            `; Application configuration file [MODIFIED]
; Project: ${name}
; Branch: ${description}
; Version: 1

`
          }
        {
          Object.keys(original).map((key, i) => {
            const value = original[key]
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
        </div>
        <div className="column is-half">
      <pre className="panel-block">
          {
            `; Application configuration file [ORIGINAL]
; Project: ${name}
; Branch: ${description}
; Version: 1

`
          }
        {
          Object.keys(original).map((key, i) => {
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
        </div>
      </div>
    )
  }
}

Diff.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  definition: PropTypes.object,
  original: PropTypes.object,
}

Diff.defaultProps = {
  name: 'Config',
  description: '',
}

export {Diff}