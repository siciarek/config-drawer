import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './App'
import {PageNotFound} from './pages'
import {Editor, Preview, List, Changes, Versions} from '../editor'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={List}/>

    <Route name="editor" path="editor/:project/:branch" component={Editor}/>
    <Route name="preview" path="preview/:project/:branch" component={Preview}/>
    <Route name="changes" path="changes/:project/:branch" component={Changes}/>
    <Route name="versions" path="versions/:project/:branch" component={Versions}/>
    <Route name="versionsx" path="versions/:project/:branch/:version" component={Versions}/>

    <Route path="*" component={PageNotFound}/>
  </Route>
)