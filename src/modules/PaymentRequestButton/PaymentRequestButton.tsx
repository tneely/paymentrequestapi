/* GiveMeMoneyAPI - PaymentRequestButton.tsx
*
*  @description: Button to launch the Payment Request API
*
*  History:
*   *TBN 09/17 - Created
*/

import * as React from 'react';
import { connect } from 'react-redux';

export enum PaymentRequestActions {
  PaymentRequestShown = "PAYMENTREQUEST_SHOWN",
  PaymentRequestFailure = "PAYMENTREQUEST_FAILURE",
  PaymentRequestSuccess = "PAYMENTREQUEST_SUCCESS",
  PaymentRequestSubmitted = "PAYMENTREQUEST_SUBMITTED",
}

const mapStateToProps = (state:any, ownProps: any) => (
  {
    id: ownProps.id as string,
    className: ownProps.className as string,
    fallBack: ownProps.fallBack as JSX.Element,
    paymentDetails: state.PaymentRequest.paymentDetails as PaymentDetails,
    supportedPaymentMethods: state.PaymentRequest.supportedPaymentMethods as PaymentMethodData[],
    options: state.PaymentRequest.options as PaymentOptions,
  }
);

const mapDispatchToProps = (dispatch: Function) => (
  {
    onPaymentRequestShown: () => dispatch(
      {type: PaymentRequestActions.PaymentRequestShown}
    ),
    onPaymentRequestFailure: (err: string) => dispatch(
      {type: PaymentRequestActions.PaymentRequestFailure,
      payload: err}
    ),
    onPaymentRequestSubmitted: (paymentResponse: PaymentResponse) => dispatch(
      {type: PaymentRequestActions.PaymentRequestSubmitted,
      payload: paymentResponse}
    ),
    onPaymentRequestSuccess: () => dispatch(
      {type: PaymentRequestActions.PaymentRequestSuccess}
    ),
  }
);

interface IPaymentRequestButton extends React.Props<any> {
  id: string;
  className: string;
  fallBack: JSX.Element;
  supportedPaymentMethods: PaymentMethodData[];
  paymentDetails: PaymentDetails;
  options: PaymentOptions;
  onPaymentRequestShown: Function;
  onPaymentRequestFailure: Function;
  onPaymentRequestSubmitted: Function;
  onPaymentRequestSuccess: Function;
}

const PaymentRequestButtonCore = (props: IPaymentRequestButton) => {

  if ((window as any).PaymentRequest) {

    return (
      <button id={props.id} className={props.className} key={props.key}
        onClick={() => 
        {
          try {
            const request = new PaymentRequest(
              props.supportedPaymentMethods,
              props.paymentDetails,
              props.options,
            );

            if (request != null) {
              props.onPaymentRequestShown();
              request.show()
              .then((paymentResponse) => {
                props.onPaymentRequestSubmitted(paymentResponse);
                return paymentResponse.complete()
                .then(() => {
                  props.onPaymentRequestSuccess();
                })
              })
              .catch((err) => {
                props.onPaymentRequestFailure(err.message);
              })
            }
          } catch (err) {
            props.onPaymentRequestFailure(err.message);
          }
        }}
      >
        {props.children}
      </button>);
  } else {
    return (props.fallBack);
  }
};

export const PaymentRequestButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentRequestButtonCore);