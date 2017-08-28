import React from 'react'
import axios from 'axios'
import config from '../app/config'

import {
  CONFIG_VARIABLE_DESELECT,
  CONFIG_VARIABLE_SELECT,
  CONFIG_LIST_FETCH,
  CONFIG_DEFINITION_FETCH,
} from './EditorActionTypes'

export const selectVariable = variable => ({
  type: CONFIG_VARIABLE_SELECT,
  payload: variable
})

export const deselectVariable = variable => ({
  type: CONFIG_VARIABLE_DESELECT,
  payload: variable
})

export const fetchConfigDefinition = (project, branch) => {
  console.log({[project]: branch})

  return {
    type: CONFIG_DEFINITION_FETCH,
    payload: axios.get(`${config.serviceUrl}/data/${project}/${branch}`)
  }
}

export const fetchConfigList = () => ({
  type: CONFIG_LIST_FETCH,
  payload: axios.get(`${config.serviceUrl}/list`)
})
