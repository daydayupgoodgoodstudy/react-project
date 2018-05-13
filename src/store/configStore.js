import { applyMiddleware , createStore } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

import thunk from 'redux-thunk';

import {createLogger}  from 'redux-logger';
const logger = createLogger();
const login_token = store => next => action => {
  let result = next(action); // 返回的也是同样的action值
  return result;
};

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk,logger)
  )

//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('../reducers', () => {
//       const nextRootReducer = require('../reducers').default
//       store.replaceReducer(nextRootReducer)
//     })
//   }
  return store
}