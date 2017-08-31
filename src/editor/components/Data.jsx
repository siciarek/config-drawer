import React from 'react'
import PropTypes from 'prop-types'

const parseValue = (val) => {
  switch(typeof val) {
    case 'string':
    case 'number':
      return val
    case 'boolean':
      return JSON.stringify(val)
    case 'object':
      if(Array.isArray(val)) {
        return val.join(', ')
      }
      break
  }

  return <pre>{JSON.stringify(val, null, 4)}</pre>
}

const Data = ({name, data, select}) => {

  return (
    <div className="column  is-two-thirds">
      <section>
        <nav className="panel">
          <p className="panel-heading">
            <strong>{name}</strong>
          </p>
          {
            Object.keys(data).map(key => {
              const val = data[key]
              return (
                <a key={key} className="panel-block" onClick={() => select({key: key, value: val})}>
                  <div className=""><strong>{key}</strong></div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div>{parseValue(val)}</div>
                </a>
              )
            })
          }
        </nav>
      </section>
    </div>
  )
}

Data.propTypes = {
  definition: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
}

Data.defaultProps = {
  definition: {},
  name: 'data',
}

export {Data}