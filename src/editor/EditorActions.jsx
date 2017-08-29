import React from 'react'
import axios from 'axios'
import config from '../app/config'

import {
  CONFIG_DEFINITION_SAVE,
  CONFIG_VARIABLE_UPDATE,
  CONFIG_VARIABLE_DESELECT,
  CONFIG_VARIABLE_SELECT,
  CONFIG_LIST_FETCH,
  CONFIG_DEFINITION_FETCH,
} from './EditorActionTypes'

export const saveConfigDefinition = (project, branch, data) => ({
  type: CONFIG_DEFINITION_SAVE,
  payload: axios.post(`${config.serviceUrl}/configuration/${project}/${branch}`, JSON.stringify(data))
})

export const updateVariable = variable => ({
  type: CONFIG_VARIABLE_UPDATE,
  payload: variable
})

export const selectVariable = variable => ({
  type: CONFIG_VARIABLE_SELECT,
  payload: variable
})

export const deselectVariable = variable => ({
  type: CONFIG_VARIABLE_DESELECT,
  payload: variable
})

export const fetchConfigDefinition = (project, branch) => ({
  type: CONFIG_DEFINITION_FETCH,
  payload: axios.get(`${config.serviceUrl}/configuration/${project}/${branch}`)
})

export const fetchConfigList = () => ({
  type: CONFIG_LIST_FETCH,
  payload: axios.get(`${config.serviceUrl}/configuration`)
})
