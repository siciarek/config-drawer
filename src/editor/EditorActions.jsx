import React from 'react'
import axios from 'axios'
import config from '../app/config'

import {
  CONFIG_LIST_FETCH,
  CONFIG_DEFINITION_FETCH,
} from './EditorActionTypes'

export const fetchConfigDefinition = (project, branch) => ({
  type: CONFIG_DEFINITION_FETCH,
  payload: axios.get(`${config.serviceUrl}/data/${project}/${branch}`)
})

export const fetchConfigList = () => ({
  type: CONFIG_LIST_FETCH,
  payload: axios.get(`${config.serviceUrl}/list`)
})
