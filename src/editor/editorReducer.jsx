import {
  CONFIG_VARIABLE_UPDATE,
  CONFIG_VARIABLE_SELECT,
  CONFIG_VARIABLE_DESELECT,
  CONFIG_LIST_FETCH_FULFILLED,
  CONFIG_DEFINITION_FETCH_FULFILLED,
  CONFIG_DEFINITION_SAVE_FULFILLED,
} from '../editor/EditorActionTypes'

const defaultState = {
  project: 'productcatalog',
  branch: 'test',
  selected: null,
  current: null,
  original: null,
  list: [],
}

export default (state = defaultState, action) => {

  switch (action.type) {
    case CONFIG_DEFINITION_SAVE_FULFILLED: {
      return {
        ...state,
        current: {...action.payload.data},
        original:  {...action.payload.data},
      }
    }
    case CONFIG_VARIABLE_UPDATE: {
      const variable = action.payload
      const current = {...state.current, [variable.section]: {...state.current[variable.section], [variable.key]: variable.value}}

      return {
        ...state,
        selected: null,
        current: current,
      }
    }
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
        current: {...action.payload.data},
        original:  {...action.payload.data},
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