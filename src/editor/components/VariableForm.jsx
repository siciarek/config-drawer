import React from 'react'
import {Field, reduxForm} from 'redux-form'

const renderField = ({label, input, meta: {touched, error, warning}, ...custom}) => {

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
    <Field name="key" label="Key" component={renderField}/>
    <Field name="value" label="Value" component={renderField}/>

    <br/>

    <button title="Cancel" type="button" className="button is-link" onClick={cancel}>Cancel</button>

    <button title="Change" className="button is-primary is-pulled-right">Change</button>
   </form>

export default reduxForm({form: 'variableForm'})(VariableForm)