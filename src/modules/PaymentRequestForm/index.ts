/* GiveMeMoneyAPI - index.ts
*
*  @description: acts as index and reducer for PaymentRequestForm
*
*  History:
*   *TBN 09/17 - Created
*/

export enum Actions {
  PaymentDetailsChange = "PAYMENT_DETAILS_CHANGE",
  PaymentMethodsChange = "PAYMENT_METHODS_CHANGE",
  PaymentOptionsChange = "PAYMENT_OPTIONS_CHANGE",
  AddDisplayItem = "ADD_DISPLAY_ITEM",
  RemoveDisplayItem = "REMOVE_DISPLAY_ITEM",
  BadInput = "BAD_INPUT",
}

const initialState = {
  supportedPaymentMethods: [
    {  
      supportedMethods: ['basic-card'],
      data: {
        supportedNetworks: [],
        supportedTypes: []
      }
    },
  ],
  paymentDetails: {
    total: {
      label: 'Total',
      amount: {
        currency: 'USD',
        value: "1.0",
      },
    },
    displayItems: [
    ],
  },
  options: {
    requestPayerName: false,
    requestPayerPhone: false,
    requestPayerEmail: false,
  },
};

const displayItemLabels = ['Subtotal', 'Tax', 
  'Discount', 'Special', ';)', 'Shipping', 'Processing fee',
  'Service charge', 'Internet tax'];

export const PaymentRequestFormReducer = (state = initialState, action: {type: Actions, payload: any}) => {
  switch (action.type) {

    case Actions.PaymentDetailsChange:
      return {...state, 
        paymentDetails: {...action.payload}};

    case Actions.PaymentMethodsChange:
      return { ...state,
        supportedPaymentMethods: [...action.payload] };

    case Actions.PaymentOptionsChange:
      return { ...state,
        options: {...action.payload}};

    case Actions.AddDisplayItem:
        return { ...state,
          paymentDetails: { ...state.paymentDetails,
            displayItems: [...state.paymentDetails.displayItems,
              {
                label: displayItemLabels[Math.floor(Math.random() * displayItemLabels.length)],
                amount: {
                  currency: 'USD',
                  value: "1.0",
                }
              }]}};

    case Actions.RemoveDisplayItem:
      return { ...state,
        paymentDetails: { ...state.paymentDetails,
          displayItems: state.paymentDetails.displayItems.filter(
            (obj, index) => index != action.payload)}};

    default:
      return state;
  }
};

export { PaymentRequestForm } from './PaymentRequestForm';
export { PaymentRequestObject } from './PaymentRequestObject';