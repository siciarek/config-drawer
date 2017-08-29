import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {convertToIniFormat} from '../../app/Utils'

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

/**
 * Deep diff between two object, using lodash
 * @param  {Object} object Object compared
 * @param  {Object} base   Object to compare with
 * @return {Object}        Return a new object who represent the diff
 */
function difference(object, base) {
  function changes(object, base) {
    return _.transform(object, function(result, value, key) {
      if (!_.isEqual(value, base[key])) {
        result[key] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
      }
    });
  }
  return changes(object, base);
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

    const diff = difference(definition, original)

    return (
      <div className="columns">
        <div className="column is-half">
        {convertToIniFormat(original, true, diff)}
        </div>
        <div className="column is-half">
        {convertToIniFormat(definition, true, diff)}
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