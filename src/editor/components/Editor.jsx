import React from 'react'
import PropTypes from 'prop-types'
import {Sections} from './Sections'
import {Data} from './Data'
import VariableForm from "./VariableForm"

const getType = (value) => {
  const type = typeof value
  return Array.isArray(value) ? 'array' : type
}

class Editor extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      section: null,
    }
  }

  render() {

    const {project, branch, definition, select, deselect, selectedVariable, submit, router} = this.props

    if(project === null) {
      router.push('/')
    }

    const {section} = this.state

    const dataPanel = !section
      ? null
      : <Data name={section} data={definition[section]} select={select}/>

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
                    <h3>Edit variable</h3>
                    <hr/>
                    <VariableForm
                      initialValues={{
                        ...selectedVariable,
                        section: section,
                        originalKey: selectedVariable.key,
                        type: getType(selectedVariable.value),
                      }}
                      onSubmit={submit}
                      cancel={deselect}
                    />
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
          <div className="column">
            <Sections name={project}
                      branch={branch}
                      section={this.state.section}
                      selectSection={section => this.setState({section})}
                      definition={definition}/>
          </div>
          {dataPanel}
        </div>
        {modal}
      </div>
    )
  }
}

Editor.propTypes = {
  project: PropTypes.string,
  branch: PropTypes.string,
  section: PropTypes.string,
  definition: PropTypes.object,
  dirty: PropTypes.bool,
}

Editor.defaultProps = {
  project: null,
  section: null,
  branch: '',
}

export {Editor}