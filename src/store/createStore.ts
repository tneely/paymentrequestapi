/* GiveMeMoneyAPI - createStore.ts
*
*  @description: initializes the redux store
*
*  History:
*   *TBN 09/17 - Created
*/

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import Reducers from './reducers';

const isDev = true;

export default (initialState = {}) => {
  const middlewares = [thunk];

  let composeEnhancers = compose;

  if (isDev) {
    const composeWithDevToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }

  return createStore(Reducers, initialState, composeEnhancers(applyMiddleware(...middlewares )));
};