import React from 'react'
import {Field, reduxForm} from 'redux-form'

const renderTextField = ({label, input, meta: {touched, error, warning}, ...custom}) => <div className="field">
  <label className="label">{label}</label>
  <input className="input" {...input} {...custom}/>
</div>


const VariableForm = ({handleSubmit, cancel}) =>
  <form onSubmit={handleSubmit}>
    <Field name="key" label="Key" component={renderTextField}/>
    <Field name="value" label="Value" component={renderTextField}/>

    <br/>

    <button className="button is-primary">Submit</button>
    &nbsp;
    <button type="button" className="button is-link" onClick={cancel}>Cancel</button>
  </form>

export default reduxForm({form: 'variableForm'})(VariableForm)