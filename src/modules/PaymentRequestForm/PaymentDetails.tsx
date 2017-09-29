/* GiveMeMoneyAPI - PaymentDetails.tsx
*
*  @description: Form for PaymentDetails object
*
*  History:
*   *TBN 09/17 - Created
*/

import * as React from 'react';
import { connect } from 'react-redux';

import { Actions } from './index';
import { CurrencyInput } from './CurrencyInput';
import './PaymentRequestForm.css';

const mapStateToProps = (state:any, ownProps: any) => (
  {
    paymentDetails: state.PaymentRequest.paymentDetails as PaymentDetails,
  }
);

const mapDispatchToProps = (dispatch: Function) => (
  {
    onPaymentDetailChange: (details: object) => 
      dispatch({type: Actions.PaymentDetailsChange, payload: details}),
    addDisplayItem: () => 
      dispatch({type: Actions.AddDisplayItem}),
    removeDisplayItem: (index: number) => 
      dispatch({type: Actions.RemoveDisplayItem, payload: index}),
  }
);

interface IPaymentDetails extends React.Props<any> {
  paymentDetails: PaymentDetails;
  onPaymentDetailChange: Function;
  addDisplayItem: Function;
  removeDisplayItem: Function;
}

const PaymentDetailsCore = (props: IPaymentDetails) => (
  <div>
    <div>
      <h3>Total</h3>
      <label>
        Label:
        <input type="text" value={
          props.paymentDetails.total 
          && props.paymentDetails.total.label}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => (
            props.onPaymentDetailChange(
              {...props.paymentDetails,
                total: {...props.paymentDetails.total,
                  label: e.target.value}}
            ))}
        />
      </label>
      <label>
        Currency:
        <CurrencyInput value={
          props.paymentDetails.total 
          && props.paymentDetails.total.amount
          && props.paymentDetails.total.amount.currency}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => (
            props.onPaymentDetailChange(
              {...props.paymentDetails,
                total: {...props.paymentDetails.total,
                  amount: {...props.paymentDetails!.total!.amount,
                    currency: e.target.value}}}
            ))}
      />
      </label>
      <label>
        Value:
        <input type="number" value={
          props.paymentDetails.total 
          && props.paymentDetails.total.amount
          && props.paymentDetails.total.amount.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => (
            props.onPaymentDetailChange(
              {...props.paymentDetails,
                total: {...props.paymentDetails.total,
                  amount: {...props.paymentDetails!.total!.amount,
                    value: e.target.value=="" ? "0" : e.target.value}}}
            ))}
        />
      </label>
    </div>
    <br/>
    <button onClick={()=>props.addDisplayItem()}>Add Display Item</button>
    {
      props.paymentDetails.displayItems!.map((currentItem, currentIndex) => {
        return (
          <div>
            <label>
              Label:
              <input type="text" value={props.paymentDetails.displayItems![currentIndex]!.label}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => (
                  props.onPaymentDetailChange(
                    {...props.paymentDetails,
                      displayItems: props.paymentDetails.displayItems!.map((item, index) => (
                        index==currentIndex ? 
                        {...currentItem, 
                          label: e.target.value}
                        : item
                      ))}
                  ))}
              />
            </label>
            <label>
              Currency:
              <CurrencyInput value={props.paymentDetails.displayItems![currentIndex]!.amount!.currency}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => (
                  props.onPaymentDetailChange(
                    {...props.paymentDetails,
                      displayItems: props.paymentDetails.displayItems!.map((item, index) => (
                        index==currentIndex ? 
                        {...currentItem, 
                          amount: {...currentItem.amount,
                            currency: e.target.value}}
                        : item
                      ))}
                  ))}
            />
            </label>
            <label>
              Value:
              <input type="number" value={props.paymentDetails.displayItems![currentIndex]!.amount!.value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => (
                  props.onPaymentDetailChange(
                    {...props.paymentDetails,
                      displayItems: props.paymentDetails.displayItems!.map((item, index) => (
                        index==currentIndex ? 
                        {...currentItem, 
                          amount: {...currentItem.amount,
                            value: e.target.value=="" ? "0" : e.target.value}}
                        : item
                    ))}
                  ))}
              />
            </label>
            <button onClick={()=>props.removeDisplayItem(currentIndex)}>Remove</button>
          </div>
        )
      })
    }
  </div>
);

export const PaymentDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentDetailsCore);