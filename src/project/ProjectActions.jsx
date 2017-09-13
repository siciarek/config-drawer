import axios from 'axios'
import config from '../app/config'
import {browserHistory} from 'react-router'

const createProject = (data) => {
  data.branches = data.branches.split(',').map(e => e.trim())
  console.log(JSON.stringify(data, null, 4))

  return {
    type: 'PROJECT_CREATE',
    payload: axios.post(config.apiUrl, data).then(response => {
      browserHistory.push('/')
    })
  }
}

export {
  createProject,
}