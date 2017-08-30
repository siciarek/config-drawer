import React from 'react';
import renderHTML from 'react-render-html'
import _ from 'lodash'

const parseValue = (val) => {

  switch (typeof val) {
    case 'string':
    case 'number':
      return val;
    case 'boolean':
      return JSON.stringify(val)
  }

  return val
}

const getIniLine = (key, value) => {
  return `${key} = ${value}`
}

const parseIniKeyValue = (key, val, separator = "\n") => {
  if (Array.isArray(val)) {
    const output = val.map((v, i) => {
      return getIniLine(`${key}[]`, v)
    })
    return output.join(separator)
  }

  return getIniLine(key, parseValue(val))
}


/**
 * Deep diff between two object, using lodash
 * @param  {Object} object Object compared
 * @param  {Object} base   Object to compare with
 * @return {Object}        Return a new object who represent the diff
 */
export const difference = (object, base) => {
  const changes = (object, base) => {
    return _.transform(object, function(result, value, key) {
      if (!_.isEqual(value, base[key])) {
        result[key] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
      }
    });
  }
  return changes(object, base);
}


export const differenceCount = (object, base) => {
  const diff = difference(object, base)

  const temp = Object.keys(diff).map((key, i) => {
    return Object.keys(diff[key]).length
  })

  return temp.reduce((prev, curr) => {
    return prev + curr
  }, 0)
}


export const jsonToIni = (data, html = false, changes = {}) => {

  var separator = html === true ? '<br/>' : "\n"

  const lines = Object.keys(data).map((key, i) => {
    const value = data[key]
    const section = `${key}`

    const values = Object.keys(value).map((key, i) => {
      const xkey = key

      const val = parseIniKeyValue(key, value[key], separator)

      if (html === false) {
        return val
      }

      const res = Object.keys(changes).map((key, i) => {
        if (key === section) {
          return Object.keys(changes[key]).map((vkey, i) => {
            if (vkey === xkey) {
              return `<strong class="has-text-danger">${val}</strong>`
            }
          })
        }
      })

      const xres = res.filter(e => e !== undefined)
      const xval = xres.pop()

      const xxval = Array.isArray(xval) ? xval.filter(e => e !== undefined) : []

      return xxval.length === 0 ? val : xxval.pop()
    })

    const temp = values.join(separator)
    const sectionValues = temp.length === 0 ? '; SECTION IS EMPTY' : temp

    if (html === false) {
      return `[${section}]${separator}${sectionValues}`
    }

    // return `<span class="has-text-info">[${section}]</span>${separator}${sectionValues}`
    return `[${section}]${separator}${sectionValues}`
  })

  if(html === true) {
    return renderHTML(lines.join(`${separator.repeat(2)}`))
  }

  return lines.join(`${separator.repeat(2)}`)
}
