import React from 'react'
import PropTypes from 'prop-types'
import {CreateForm} from '../components'

const Creator = ({create, cancel}) =>
  <div clasName="columns">
    <div className="column is-half">
    <h1 className="title">New project</h1>
    <CreateForm
      onSubmit={create}
      cancel={cancel}
      initialValues={{branches: ''}}
    />
    </div>
  </div>

export default Creator