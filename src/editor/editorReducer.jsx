import {
  CONFIG_DEFINITION_RESET,
  CONFIG_PROJECT_UPDATE,
  CONFIG_VARIABLE_UPDATE,
  CONFIG_VARIABLE_SELECT,
  CONFIG_VARIABLE_DESELECT,
  CONFIG_LIST_FETCH_FULFILLED,
  CONFIG_DEFINITION_FETCH_FULFILLED,
  CONFIG_DEFINITION_SAVE_FULFILLED,
} from '../editor/EditorActionTypes'
import {CONFIG_RAW_FETCH_FULFILLED} from "./EditorActionTypes";

const defaultState = {
  list: [],

  project: null,  // Project name
  branch: null,   // Branch name
  version: null,  // Version number
  section: null,  // Section name

  current: null,  // Data of currently selected version (mutable)
  original: null, // Original data of currently selected version
  raw: null,      // Raw data of currently selected version

  selectedVariable: null, // Data of currently edited variable
}

export default (state = defaultState, action) => {

  switch (action.type) {
    case CONFIG_DEFINITION_RESET: {
      return {
        ...state,
        current: {...state.original},
      }
    }
    case CONFIG_DEFINITION_SAVE_FULFILLED: {
      return {
        ...state,
        current: {...action.payload.data},
        original:  {...action.payload.data},
      }
    }
    case CONFIG_PROJECT_UPDATE: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case CONFIG_VARIABLE_UPDATE: {
      const variable = action.payload

      let current = {
        ...state.current,
        [variable.section]: {...state.current[variable.section], [variable.key]: variable.value},
      }

      if(variable.key !== variable.originalKey) {
        delete(current[variable.section][variable.originalKey])
      }

      return {
        ...state,
        selectedVariable: null,
        current: {...current},
      }
    }
    case CONFIG_VARIABLE_SELECT: {
      return {
        ...state,
        selectedVariable: action.payload,
      }
    }
    case CONFIG_VARIABLE_DESELECT: {
      return {
        ...state,
        selectedVariable: null,
      }
    }
    case CONFIG_RAW_FETCH_FULFILLED: {
      return {
        ...state,
        raw: action.payload.data,
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