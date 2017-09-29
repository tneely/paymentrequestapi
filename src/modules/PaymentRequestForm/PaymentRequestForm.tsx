/* GiveMeMoneyAPI - PaymentRequestForm.tsx
*
*  @description: Form to launch the Payment Request API
*
*  History:
*   *TBN 09/17 - Created
*/

import * as React from 'react';

import { PaymentMethods } from './PaymentMethods';
import { PaymentDetails } from './PaymentDetails';
import { PaymentOptions } from './PaymentOptions';
import './PaymentRequestForm.css';

export const PaymentRequestForm = () => (
  <div className="prf">
    <h2>Payment Methods</h2>
    <PaymentMethods/>
    <h2>Payment Details</h2>
    <PaymentDetails/>
    <h2>Payment Options</h2>
    <PaymentOptions/>
  </div>
);
