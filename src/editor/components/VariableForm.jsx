import React from 'react'
import {Field, reduxForm} from 'redux-form'

const VariableForm = ({onSubmit, cancel}) => {

  return <form onSubmit={onSubmit}>
    <Field name="key" label="Key" component={({label, input, meta: {touched, error, warning}, ...custom})  => <div className="field">
        <label className="label">{label}</label>
        <input className="input" type="text" {...input} {...custom}/>
      </div>
    }/>
    <Field name="value" label="Value" component={({label, input, meta: {touched, error, warning}, ...custom})  => <div className="field">
      <label className="label">{label}</label>
      <input className="input" type="text" {...input} {...custom}/>
    </div>
    }/>

    <br/>

    <button type="submit" className="button is-primary">Submit</button>
    &nbsp;
    <button type="button" className="button is-link" onClick={cancel}>Cancel</button>
  </form>
}

export default reduxForm({form: 'variableForm'})(VariableForm)