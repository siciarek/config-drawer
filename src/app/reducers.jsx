import {combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'
import {reducer as form} from 'redux-form'

import editor from '../editor/editorReducer'

export default combineReducers({
  form,
  routing,
  editor,
})