import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from 'react-redux'
import {Router, browserHistory as routerHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import store from './app/store'
import routes from './app/routes'

ReactDOM.render(
  <Provider store={store}>
    <Router history={syncHistoryWithStore(routerHistory, store)} routes={routes}/>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
