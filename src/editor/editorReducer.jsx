import {
  CONFIG_VARIABLE_SELECT,
  CONFIG_VARIABLE_DESELECT,
  CONFIG_LIST_FETCH_FULFILLED,
  CONFIG_DEFINITION_FETCH_FULFILLED,
} from '../editor/EditorActionTypes'

const defaultState = {
  selected: null,
  current: null,
  list: [],
}

export default (state = defaultState, action) => {

  switch (action.type) {
    case CONFIG_VARIABLE_SELECT: {
      return {
        ...state,
        selected: action.payload,
      }
    }
    case CONFIG_VARIABLE_DESELECT: {
      return {
        ...state,
        selected: null,
      }
    }
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