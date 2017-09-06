import React from 'react'
import PropTypes from 'prop-types'
import {Field, reduxForm} from 'redux-form'

const CreateForm = ({handleSubmit, cancel}) => {
  return <form onSubmit={handleSubmit}>
    <Field name="name" label="Name" component={({label = '', input, meta: {touched, error, warning}, ...custom}) =>
      <div className="field">
        <label className="label">{label}</label>
        <input className="input" {...input} {...custom}/>
      </div>
    }/>

    <br/>

    <button title="Cancel" type="button" className="button is-link" onClick={cancel}>Cancel</button>
    <button title="Change" className="button is-primary is-pulled-right">Change</button>
  </form>
}

CreateForm.propTypes = {
  cancel: PropTypes.func.isRequired,
}

CreateForm.defaultProps = {
  cancel: () => {}
}

export default reduxForm({form: 'projectCreateForm'})(CreateForm)