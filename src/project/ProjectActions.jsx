import axios from 'axios'
import config from '../app/config'
import {browserHistory} from 'react-router'

const createProject = (data) => {
  data.branches = data.branches.split(',')
  .map(e => e.trim())
  .filter(e => e.length > 0)

  return {
    type: 'PROJECT_CREATE',
    payload: axios.post(`${config.apiUrl}/project/create`, data)
    // .then(response =>  browserHistory.push('/'))
  }
}

export {
  createProject,
}