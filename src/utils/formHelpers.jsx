import React from 'react'

const renderTextField = ({label = '', input, meta: {touched, error, warning}, ...custom}) =>
  <div className="field">
    <label className={`label${touched && error || touched && warning ? ' has-text-danger' : ''}`}>{label}</label>
    <div className="control">
      <input className={`input${touched && error || touched && warning ? ' is-danger' : ''}`} {...input} {...custom}/>
    </div>
    <p className={`help${touched && error || touched && warning ? ' is-danger' : ''}`}>
      {touched && error || touched && warning}
    </p>
  </div>

export {renderTextField}