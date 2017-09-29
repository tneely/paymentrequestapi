/* GiveMeMoneyAPI - index.ts
*
*  @description: handles payment request button actions
*
*  History:
*   *TBN 09/17 - Created
*/

import { PaymentRequestActions as Actions } from '../PaymentRequestButton';

const initialState = {
  error: ''
};

export const PaymentRequestHandlerReducer = (state = initialState, 
  action: {type: Actions, payload: any}) => {

  switch (action.type) {
    case Actions.PaymentRequestShown:
      return {...state, error: ''}
    case Actions.PaymentRequestFailure:
      return {...state, error: action.payload}

    default:
      return state;
  }
};

export { PaymentRequestError } from './PaymentRequestError';