import React from 'react'
import PropTypes from 'prop-types'

const View = ({definition}) => {
  return <section>
    {JSON.stringify(definition)}
  </section>
}

View.propTypes = {
  definition: PropTypes.object.isRequired,
}

View.defaultProps = {
  definition: {},
}

export {View}