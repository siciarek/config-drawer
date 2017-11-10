import React from 'react'
import PropTypes from 'prop-types'
import {CreateForm} from '../components'

const Creator = ({create, cancel}) =>
  <div className="columns">
    <div className="column is-half">
    <h1 className="title">New project</h1>
    <CreateForm
      onSubmit={create}
      cancel={cancel}
      initialValues={{name: 'Zażółczac jaźni', description: 'Zażółć gęślą jaźń', branches: 'master,test,demo'}}
    />
    </div>
  </div>

export default Creator