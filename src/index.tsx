/* GiveMeMoneyAPI - index.tsx
*
*  @description: initializes the redux store and renders the app
*
*  History:
*   *TBN 09/17 - Created
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import createStore from './store/createStore';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const preLoadedState = (window as any).__PRELOADED_STATE__;
const store = createStore(preLoadedState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
