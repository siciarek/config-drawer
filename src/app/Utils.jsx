import React from 'react';
import renderHTML from 'react-render-html'

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

const parseKeyValue = (key, val, separator = "\n") => {
  if (Array.isArray(val)) {
    const output = val.map((v, i) => {
      return `${key}[]=${v}`
    })
    return output.join(separator)
  }
  return `${key}=${parseValue(val)}`
}

export const convertToIniFormat = (data, html = false, diff = {}) => {

  var separator = html === true ? '<br/>' : "\n"

  const lines = Object.keys(data).map((key, i) => {
    const value = data[key]
    const section = `${key}`

    const values = Object.keys(value).map((key, i) => {
      const xkey = key

      const val = parseKeyValue(key, value[key], separator)

      if (html === false) {
        return val
      }

      const res = Object.keys(diff).map((key, i) => {
        if (key === section) {
          return Object.keys(diff[key]).map((vkey, i) => {
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

    return `<span class="has-text-info">[${section}]</span>${separator}${sectionValues}`
  })

  if(html === true) {
    return renderHTML(lines.join(`${separator.repeat(2)}`))
  }

  return lines.join(`${separator.repeat(2)}`)
}
