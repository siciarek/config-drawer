import React from 'react'
import PropTypes from 'prop-types'
import {jsonToIni} from '../../app/Utils'

class Preview extends React.Component {

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
        {jsonToIni(definition, true)}
      </div>
    )
  }
}

Preview.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  definition: PropTypes.object,
}

Preview.defaultProps = {
  name: 'Config',
  description: '',
}

export {Preview}