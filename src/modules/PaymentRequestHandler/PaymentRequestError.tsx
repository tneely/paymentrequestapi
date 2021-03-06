/* GiveMeMoneyAPI - PaymentRequestError.tsx
*
*  @description: Displays error messages emitted by PaymentRequest
*
*  History:
*   *TBN 09/17 - Created
*/

import * as React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state: {PaymentRequestHandler: {error: string}}) => (
  {
    error: state.PaymentRequestHandler.error,
  }
);

const mapDispatchToProps = (dispatch: Function) => (
  {
  }
);

interface IPaymentRequestError extends React.Props<{}> {
  error: string;
}

const PaymentRequestErrorCore = (props: IPaymentRequestError) => (
  <div style={{color: 'red', margin: '10px'}}>
    <code>
      {props.error}&nbsp;
    </code>
  </div>
);

export const PaymentRequestError = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentRequestErrorCore);