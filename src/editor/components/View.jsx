import React from 'react'
import PropTypes from 'prop-types'

class View extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    const {name, description, definition} = this.props

    return (
      <section>
        <nav className="panel">
          <p className="panel-heading">
            <strong>{name.toUpperCase()}</strong> {description}
          </p>
          <pre className="panel-block">{JSON.stringify(definition, null, 4)}</pre>
        </nav>
      </section>
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