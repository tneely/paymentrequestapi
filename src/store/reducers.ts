/* GiveMeMoneyAPI - reducers.ts
*
*  @description: gathers the reducers for the redux store
*
*  History:
*   *TBN 09/17 - Created
*/

import { combineReducers } from 'redux';

import { PaymentRequestFormReducer } from '../modules/PaymentRequestForm';
import { PaymentRequestHandlerReducer } from '../modules/PaymentRequestHandler';

export default combineReducers({
  PaymentRequest: PaymentRequestFormReducer,
  PaymentRequestHandler: PaymentRequestHandlerReducer
});