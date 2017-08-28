import React from 'react'
import PropTypes from 'prop-types'

const View = ({definition}) => {
  return <section>
    <pre>
    {JSON.stringify(definition, null, 4)}
    </pre>
  </section>
}

View.propTypes = {
  definition: PropTypes.object.isRequired,
}

View.defaultProps = {
  definition: {},
}

export {View}