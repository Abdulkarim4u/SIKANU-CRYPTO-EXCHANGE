// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()  // creating middleware thta show us actions are triggered inside our app and log on to the console.
const middleware = []

// For Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose //we wire up redux dev tools

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware, loggerMiddleware))
  )
}
// redux configuration.