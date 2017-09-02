import React from 'react'
import {IndexRoute, Route} from 'react-router'

import App from './App'
import {PageNotFound, Blank} from './pages'
import {Changes, Editor, List, Versions,} from '../editor'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={List}/>

    <Route name="projects" path="project/:project" component={List}/>

    <Route name="editor" path="editor/:project/:branch/:version" component={Editor}/>
    <Route name="changes" path="changes/:project/:branch" component={Changes}/>
    <Route name="versions" path="versions/:project/:branch/:version" component={Versions}/>

    <Route path="/blank" component={Blank}/>
    <Route path="*" component={PageNotFound}/>
  </Route>
)