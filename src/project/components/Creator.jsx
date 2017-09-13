import React from 'react'
import PropTypes from 'prop-types'
import {CreateForm} from '../components'
import {} from '../../project/ProjectActions'

const Creator = ({router, create}) =>
  <div clasName="columns">
    <div className="column is-half">
    <h1 className="title">New project</h1>
    <CreateForm
      onSubmit={create}
      cancel={() => router.push('/')}
      initialValues={
        {
          branches: ''
        }
      }
    />
    </div>
  </div>

export default Creator