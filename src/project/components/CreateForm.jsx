import React from 'react'
import PropTypes from 'prop-types'
import {Field, reduxForm} from 'redux-form'
import {required} from '../../utils/formValidators'
import {renderTextField} from '../../utils/formHelpers'

const CreateForm = ({handleSubmit, cancel}) =>
  <form onSubmit={handleSubmit}>
    <Field name="name"
           placeholder="Insert project name."
           label="Name"
           validate={required}
           component={renderTextField}
    />
    <Field name="description"
           placeholder="Inser short description (optional)."
           label="Description"
           component={renderTextField}
    />
    <Field name="branches"
           placeholder="Insert comma separated values eg. master, test, devel."
           label="Branches"
           validate={required}
           component={renderTextField}
    />

    <br/>

    <button title="Create" className="button is-primary is-pulled-right">Create</button>
    <button title="Cancel" className="button is-link" type="button" onClick={cancel}>Cancel</button>
  </form>

CreateForm.propTypes = {
  cancel: PropTypes.func.isRequired,
}

CreateForm.defaultProps = {
  cancel: () => {
  },
}

export default reduxForm({form: 'projectCreateForm'})(CreateForm)