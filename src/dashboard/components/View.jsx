import React from 'react'
import PropTypes from 'prop-types'
import {Sections} from './Sections'
import {Data} from './Data'

class View extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      section: null,
    }
  }

  render() {

    const {name, description, definition} = this.props
    const dataPanel = !this.state.section ? null : <Data name={this.state.section} data={definition[this.state.section]}/>

    return (
      <div>
      <div className="columns">
        <div className="column is-half">
          <Sections name={name} selectSection={section => this.setState({section})}description={description} definition={definition}/>
        </div>
        <div className="column">
          {dataPanel}
        </div>
      </div>
        <pre>
          {JSON.stringify(definition, null, 4)}
        </pre>
      </div>
    )
  }
}

View.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  definition: PropTypes.object.isRequired,
}

View.defaultProps = {
  name: 'Config',
  description: '',
  definition: {},
}

export {View}