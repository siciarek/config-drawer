import React from 'react'
import PropTypes from 'prop-types'

const parseValue = (val) => {
  return typeof val === 'string' || typeof val === 'number'
    ? val
    : <pre>{JSON.stringify(val, null, 4)}</pre>
}

const Data = ({name, data}) => {

  return (
    <section>
      <nav className="panel">
        <p className="panel-heading">
          <strong>{name}</strong>
        </p>
        {
          Object.keys(data).map(key => {
            const val = data[key]
            return (
              <a key={key} className="panel-block">
                <div className=""><strong>{key}</strong></div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="">{parseValue(val)}</div>
              </a>
            )
          })
        }
      </nav>
    </section>
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