import React from 'react'
import {TextField, RadioGroup, FormControlLabel, Switch} from 'material-ui'

import {
  SubmitButton,
  SelectGenderField,
} from '../app/widgets'

// http://redux-form.com/7.0.3/examples/material-ui/

const renderSwitch = ({label, input}) => <FormControlLabel
  label={label}
  control={<Switch checked={input.value} onChange={(event, value) => input.onChange(value)}/>}
/>

const renderTextField = ({label, input, meta: {touched, error, warning}, ...custom}) => <TextField
  style={{marginTop: 8}}
  autoComplete="off"
  helperText={touched && error || touched && warning}
  error={touched && error && error.length > 0}
  label={label}
  {...input}
  {...custom}
/>

const renderGenderField = ({input, meta: {touched, error, warning}, ...custom}) => <SelectGenderField
  onChange={(event, value) => input.onChange(value)} {...input} {...custom}
/>

export {renderTextField, renderSwitch, renderGenderField, SubmitButton}