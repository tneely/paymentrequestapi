/* GiveMeMoneyAPI - PaymentOptions.tsx
*
*  @description: Form for payment options object
*
*  History:
*   *TBN 09/17 - Created
*/

import * as React from 'react';
import { connect } from 'react-redux';

import { Actions } from './index';
import './PaymentRequestForm.css';

const mapStateToProps = (state:any, ownProps: any) => (
  {
    options: state.PaymentRequest.options as PaymentOptions,
  }
);

const mapDispatchToProps = (dispatch: Function) => (
  {
    onPaymentOptionsChange: (payload: object) => dispatch({
      type: Actions.PaymentOptionsChange,
      payload: payload}
    ),
  }
);

interface IPaymentOptions extends React.Props<any> {
  options: PaymentOptions;
  onPaymentOptionsChange: Function;
}

const PaymentOptionsCore = (props: IPaymentOptions) => (
  <form>
    <label>
      Request Name
      <input type="checkbox" checked={props.options.requestPayerName}
        onChange={() => (
          props.onPaymentOptionsChange(
            {...props.options,
              requestPayerName: !props.options.requestPayerName}
          ))}/>
    </label>
    <label>
      Request Phone
      <input type="checkbox" checked={props.options.requestPayerPhone}
        onChange={() => (
          props.onPaymentOptionsChange(
            {...props.options,
              requestPayerPhone: !props.options.requestPayerPhone}
          ))}/>
    </label>
    <label>
      Request Email
      <input type="checkbox" checked={props.options.requestPayerEmail}
        onChange={() => (
          props.onPaymentOptionsChange(
            {...props.options,
              requestPayerEmail: !props.options.requestPayerEmail}
          ))}/>
    </label>
  </form>
);

export const PaymentOptions = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentOptionsCore);