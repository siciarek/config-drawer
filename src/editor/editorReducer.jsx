import {
  CONFIG_LIST_FETCH_FULFILLED,
  CONFIG_DEFINITION_FETCH_FULFILLED,
} from '../editor/EditorActionTypes'

const defaultState = {
  current: {},
  list: [],
}

export default (state = defaultState, action) => {

  switch (action.type) {
    case CONFIG_DEFINITION_FETCH_FULFILLED: {
      return {
        ...state,
        current: action.payload.data,
      }
    }
    case CONFIG_LIST_FETCH_FULFILLED: {
      return {
        ...state,
        list: action.payload.data,
      }
    }
    default:
      return state
  }
}