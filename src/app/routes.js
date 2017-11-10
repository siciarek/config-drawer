import React from 'react'
import {IndexRoute, Route} from 'react-router'

import App from './App'
import {PageNotFound, Blank} from './pages'
import {Changes, Editor, List, Versions,} from '../editor'
import {Creator} from '../project'

import TestIndex from '../test/Index'

export default (
  <Route path="/" component={App}>

    <Route name="test" path="/test" component={TestIndex}/>

    <IndexRoute component={List}/>

    <Route name="create-project" path="project/create" component={Creator}/>
    <Route name="projects" path="project/:project" component={List}/>

    <Route name="editor" path="editor/:project/:branch/:version" component={Editor}/>
    <Route name="changes" path="changes/:project/:branch" component={Changes}/>
    <Route name="versions" path="versions/:project/:branch/:version" component={Versions}/>

    <Route path="/blank" component={Blank}/>
    <Route path="*" component={PageNotFound}/>
  </Route>
)