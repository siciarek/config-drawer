import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from 'react-redux'
import {Router, browserHistory as routerHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import store from './app/store'
import routes from './app/routes'

// ReactDOM.render(<App children={<View name={'INO'} description={'master'} definition={definition}/>} />, document.getElementById('root'));

ReactDOM.render(
  <Provider store={store}>
    <Router history={syncHistoryWithStore(routerHistory, store)} routes={routes}/>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
