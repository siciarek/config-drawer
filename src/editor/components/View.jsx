import React from 'react'
import PropTypes from 'prop-types'
import {convertToIniFormat} from '../../app/Utils'

class View extends React.Component {

  render() {

    const {name, description, definition, router} = this.props

    if (!definition) {
      router.push('/')
      return null
    }

    return (
      <div>
        {/*<pre className="panel-block">*/}
        {/*{*/}
        {/*`; Application configuration file*/}
        {/*; Project: ${name}*/}
        {/*; Branch: ${description}*/}
        {/*; Version: __VERSION__*/}

        {/*`}        </pre>*/}
        {convertToIniFormat(definition, true)}
      </div>
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