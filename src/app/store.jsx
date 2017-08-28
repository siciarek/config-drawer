import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

import reducer from './reducers'
import config, {ENV_PROD} from './config'

const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(
  promise(),
  thunk,
  sagaMiddleware
)

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options if needed
})

const store = config.env !== ENV_PROD
  ? createStore(reducer, composeEnhancers(middleware))
  : createStore(reducer, middleware)

// sagaMiddleware.run(rootSaga)

export default store