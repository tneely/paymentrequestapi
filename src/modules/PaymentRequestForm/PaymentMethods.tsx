/* GiveMeMoneyAPI - PaymentMethods.tsx
*
*  @description: Form for payment methods object
*
*  History:
*   *TBN 09/17 - Created
*/

import * as React from 'react';
import { connect } from 'react-redux';

import { Actions } from './index';
import './PaymentRequestForm.css';

const androidPayMethod = {
  supportedMethods: ['https://android.com/pay'],
  data: {
    merchantName: 'Android Pay Demo',  
    merchantId: '00000000000000000000',  
    environment: 'TEST',  
    allowedCardNetworks: ['AMEX', 'DISCOVER', 'MASTERCARD', 'VISA'],
    paymentMethodTokenizationParameters: {  
      tokenizationType: 'GATEWAY_TOKEN',  
      parameters: {  
        'gateway': 'stripe',  
        'stripe:publishableKey': 'xx_demo_xxxxxxxxxxxxxxxxxxxxxxxx',
        'stripe:version': '2016-07-06',
      }, 
    }
  }
};

const mapStateToProps = (state: {PaymentRequest: {supportedPaymentMethods: PaymentMethodData[]}}) => (
  {
    supportedPaymentMethods: state.PaymentRequest.supportedPaymentMethods,
  }
);

const mapDispatchToProps = (dispatch: Function) => (
  {
    onPaymentMethodsChange: (payload: object) => dispatch({
      type: Actions.PaymentMethodsChange,
      payload: payload}
    ),
  }
);

interface IPaymentMethods extends React.Props<{}> {
  supportedPaymentMethods: PaymentMethodData[];
  onPaymentMethodsChange: Function;
}

const PaymentMethodsCore = (props: IPaymentMethods) => (
  <div>
    <div>
      <h3>Basic card</h3>
      <select 
        style={{width: '300px'}} 
        multiple={true}
        onChange={(e) => props.onPaymentMethodsChange(
          props.supportedPaymentMethods.map((paymentMethod, index) => {
            if (index === 0) {
              let options = e.target.options;
              let selectedOptions: string[] = [];
              for (let i = 0; i < options.length; i++) {
                if (options[i].selected) {
                  selectedOptions.push(options[i].value);
                }
              }
              return {...paymentMethod,
                data: {...paymentMethod.data,
                  supportedNetworks: selectedOptions}};
            } else {
              return paymentMethod;
            }
          })
        )}
      >
        <option value="amex">American Express</option>
        <option value="diners">Diners Club</option>
        <option value="discover">Discover</option>
        <option value="jcb">JCB</option>
        <option value="mastercard">Mastercard</option>
        <option value="mir">Mir</option>
        <option value="unionpay">UnionPay</option>
        <option value="visa">Visa</option>
      </select>

      <select 
        style={{width: '300px'}} 
        multiple={true}
        onChange={(e) => props.onPaymentMethodsChange(
          props.supportedPaymentMethods.map((paymentMethod, index) => {
            if (index === 0) {
              let options = e.target.options;
              let selectedOptions: string[] = [];
              for (let i = 0; i < options.length; i++) {
                if (options[i].selected) {
                  selectedOptions.push(options[i].value);
                }
              }
              return {...paymentMethod,
                data: {...paymentMethod.data,
                  supportedTypes: selectedOptions}};
            } else {
              return paymentMethod;
            }
          })
        )}
      >
        <option value="credit">Credit</option>
        <option value="debit">Debit</option>
        <option value="prepaid">Prepaid</option>
      </select>
    </div>
    <div>
      <h3>Ohter payment methods</h3>
      <label>
      Android Pay
      <input 
        type="checkbox" 
        checked={props.supportedPaymentMethods.some((paymentMethod) =>
          ((paymentMethod.supportedMethods != null) && 
          (paymentMethod.supportedMethods[0] === 'https://android.com/pay')))}
        onChange={(e) => (
          props.onPaymentMethodsChange(
            (e.target.checked) ? [ ...props.supportedPaymentMethods, androidPayMethod]
            : props.supportedPaymentMethods.filter((paymentMethod, index) => {
                if ((paymentMethod.supportedMethods != null) && 
                  (paymentMethod.supportedMethods[0] === 'https://android.com/pay')) {
                  return false;
                } else {
                  return true;
                }
            })))}
      />
    </label>
    </div>
  </div>
);

export const PaymentMethods = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentMethodsCore);