import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './App'
import {PageNotFound} from './pages'
import {Editor, View, List, Changes, Versions} from '../editor'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={List}/>

    <Route name="editor" path="editor/:project/:branch" component={Editor}/>
    <Route name="view" path="view/:project/:branch" component={View}/>
    <Route name="changes" path="changes/:project/:branch" component={Changes}/>
    <Route name="versions" path="versions/:project/:branch" component={Versions}/>

    <Route path="*" component={PageNotFound}/>
  </Route>
)