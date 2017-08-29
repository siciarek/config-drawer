import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './App'
import {PageNotFound} from './pages'
import {Editor, View, List, Diff} from '../editor'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={List}/>

    <Route name="editor" path="editor/:project/:branch" component={Editor}/>
    <Route name="view" path="view/:project/:branch" component={View}/>
    <Route name="diff" path="diff/:project/:branch" component={Diff}/>

    <Route path="*" component={PageNotFound}/>
  </Route>
)