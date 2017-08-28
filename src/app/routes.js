import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './App'
import {PageNotFound} from './pages'
import {Editor, View, List} from '../editor'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={List}/>

    <Route path="editor/:project/:branch" component={Editor}/>
    <Route path="view/:project/:branch" component={View}/>

    <Route path="*" component={PageNotFound}/>
  </Route>
)