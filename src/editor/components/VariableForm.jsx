import React from 'react'
import {Field, reduxForm} from 'redux-form'

const renderTextField = ({label, input, meta: {touched, error, warning}, ...custom}) => {

  const valueField = typeof input.value === 'boolean' || typeof input.value === 'string' && input.value.match(/^true|false$/)
    ? <div className="select">
      <select {...input} {...custom}>
        <option>true</option>
        <option>false</option>
      </select>
    </div>
    : <input className="input" {...input} {...custom}/>

  return <div className="field">
    <label className="label">{label}</label>
    {valueField}
  </div>
}

const VariableForm = ({handleSubmit, cancel}) =>
  <form onSubmit={handleSubmit}>
    <Field name="key" label="Key" component={renderTextField}/>
    <Field name="value" label="Value" component={renderTextField}/>

    <br/>

    <button title="Cancel" type="button" className="button is-link" onClick={cancel}>Cancel</button>

    <button title="Submit" className="button is-primary is-pulled-right">Submit</button>
   </form>

export default reduxForm({form: 'variableForm'})(VariableForm)