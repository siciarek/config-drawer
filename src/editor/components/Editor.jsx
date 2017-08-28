import React from 'react'
import PropTypes from 'prop-types'
import {Sections} from './Sections'
import {Data} from './Data'
import VariableForm from "./VariableForm"

class Editor extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      section: null,
    }
  }

  componentWillMount() {
    this.props.init()
  }

  render() {

    const {name, description, definition, select, deselect, selectedVariable} = this.props

    const {section} = this.state

    const dataPanel = !section ? null :
      <Data name={section} data={definition[section]} select={select}/>

    const modal = selectedVariable === null
      ? null
      : (
        <div id="modal" className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="box">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <VariableForm initialValues={selectedVariable}
                                  cancel={deselect}
                                  handleSubmit={data => console.log(data)}/>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <button className="modal-close is-large" onClick={deselect}></button>
        </div>
      )

    return (
      <div>
        <div className="columns">
          <div className="column is-half">
            <Sections name={name} selectSection={section => this.setState({section})} description={description}
                      definition={definition}/>
          </div>
          <div className="column">
            {dataPanel}
          </div>
        </div>
        {modal}
      </div>
    )
  }
}

Editor.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  definition: PropTypes.object,
}

Editor.defaultProps = {
  name: 'Config',
  description: '',
}

export {Editor}