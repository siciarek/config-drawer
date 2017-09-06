import React from 'react'
import PropTypes from 'prop-types'

const parseValue = (val) => {
  switch (typeof val) {
    case 'string':
    case 'number':
      return val
    case 'boolean':
      return JSON.stringify(val)
    case 'object':
      if (Array.isArray(val)) {
        return val.join(', ')
      }
      break
  }

  return <pre>{JSON.stringify(val, null, 4)}</pre>
}

const Data = ({name, data, select}) => {

  return (
    <div className="column is-two-thirds">

      <div className="columns">
        <div className="column">
          <h3 className="title">{name}</h3>
        </div>
        <div className="column">
          <a title="Edit"
             className="button is-small is-primary"
             onClick={() => console.log({name})}
          >
            <i className="fa fa-edit"/>
          </a>
        </div>
      </div>

      <table className="table is-narrow">
        <tbody>
        {
          Object.keys(data).map(key => {
            const val = data[key]
            return (
              <tr key={key}>
                <th>{key}</th>
                <td>{parseValue(val)}</td>
                <td>
                  <a title="Edit"
                     className="button is-small is-primary"
                     onClick={() => select({key: key, value: val})}
                  >
                    <i className="fa fa-edit"/>
                  </a> <a title="Remove"
                          className="button is-small is-danger"
                          onClick={() => console.log({key: key})}
                >
                  <i className="fa fa-times-circle"/>
                </a>
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
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