/* GiveMeMoneyAPI - PaymentRequestObject.tsx
*
*  @description: Displays the components of the PaymentRequest API
*
*  History:
*   *TBN 09/17 - Created
*/

import * as React from 'react';
import { connect } from 'react-redux';

import './PaymentRequestForm.css';

const mapStateToProps = (state:any, ownProps: any) => (
  {
    paymentRequestObject: state.PaymentRequest
  }
);

const mapDispatchToProps = (dispatch: Function) => (
  {
  }
);

interface IPaymentRequestObject extends React.Props<any> {
  paymentRequestObject: Object;
}

const PaymentRequestObjectCore = (props: IPaymentRequestObject) => (
  <div className="pro">
    <code>
      {JSON.stringify(props.paymentRequestObject, null, 4)}
    </code>
  </div>
);

export const PaymentRequestObject = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentRequestObjectCore);