import React from 'react'
import axios from 'axios'
import {browserHistory} from 'react-router'

import {
  CONFIG_DEFINITION_FETCH,
  CONFIG_DEFINITION_RESET,
  CONFIG_DEFINITION_SAVE,
  CONFIG_LIST_FETCH,
  CONFIG_PROJECT_UPDATE,
  CONFIG_RAW_FETCH,
  CONFIG_VARIABLE_DESELECT,
  CONFIG_VARIABLE_SELECT,
  CONFIG_VARIABLE_UPDATE,
} from './EditorActionTypes'

export const saveConfigDefinition = (project, branch, data) => dispatch => dispatch({
  type: CONFIG_DEFINITION_SAVE,
  payload: axios.post(`/configuration/${project}/${branch}`, data)
  .then(response => {

    const {project, branch, version} = JSON.parse(response.headers['x-meta-data'])

    const url = `/versions/${project}/${branch}/${version}`

    dispatch(updateProject(project, branch, version))

    browserHistory.push(url)

    dispatch(fetchConfigList())
    return response
  })
})

export const fetchRawData = (project, branch, version) => ({
  type: CONFIG_RAW_FETCH,
  payload: axios.get(`/configuration/${project}/${branch}/${version}.ini`),
})

export const updateProject = (project, branch, version = 0, section = null) => ({
  type: CONFIG_PROJECT_UPDATE,
  payload: {project, branch, version, section}
})

export const updateVariable = variable => {

  switch (variable.type) {
    case 'boolean':
      variable.value = variable.value === 'true'
      break;
    case 'array':
      variable.value = variable.value.split(',').map(e => {
        return e.match(/^\d+$/) ? parseInt(e) : e
      })
      break;
  }

  return {
    type: CONFIG_VARIABLE_UPDATE,
    payload: variable
  }
}

export const selectVariable = variable => ({
  type: CONFIG_VARIABLE_SELECT,
  payload: variable
})

export const deselectVariable = variable => ({
  type: CONFIG_VARIABLE_DESELECT,
  payload: variable
})

export const resetConfigDefinition = variable => ({type: CONFIG_DEFINITION_RESET})

export const fetchConfigDefinition = (project, branch, version = null) => dispatch => dispatch({
  type: CONFIG_DEFINITION_FETCH,
  payload: axios.get(version === null ? `/configuration/${project}/${branch}`
    : `/configuration/${project}/${branch}/${version}`
  ).then(response => {
    dispatch(fetchRawData(project, branch, version))
    return response
  }),
})

export const fetchConfigList = () => ({
  type: CONFIG_LIST_FETCH,
  payload: axios.get(`/configuration`),
})
