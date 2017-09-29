/* GiveMeMoneyAPI - App.tsx
*
*  @description: GiveMeMoneyAPI App
*
*  History:
*   *TBN 09/17 - Created
*/

import * as React from 'react';
import './App.css';

import { PaymentRequestButton } from './modules/PaymentRequestButton';
import { PaymentRequestForm, PaymentRequestObject } from './modules/PaymentRequestForm';
import { PaymentRequestError } from './modules/PaymentRequestHandler'

const logo = require('./logo.svg');

const FallBack = () => (
  <div>PaymentRequest is not supported in this browser.</div>
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GiveMeMoneyAPI</h2>
        </div>

        <div className="App-content">
          <div className="App-content-container">
            <div className="App-intro">
              <p>
                Explore the new Payment Request API.
              </p>
              <code>
                <span style={{color: "#3b78e7"}}><em>const</em></span> request 
                <span style={{color: "#d10e73"}}> = new</span>
                <span style={{color: "#5ead22"}}> PaymentRequest</span>
                (supportedPaymentMethods, paymentDetails, options);
              </code>
            </div>

            <PaymentRequestButton fallBack={FallBack()}>
              Give Me Money (not really)
            </PaymentRequestButton>

            <PaymentRequestError/>

            <hr className="App-rule"/>

            <div className="App-payment-fun">
              <PaymentRequestForm/>
              <PaymentRequestObject/>
            </div>
          </div>
        </div>

        <div className="App-footer">
          <strong>GiveMeMoneyAPI</strong> by <a href="https://www.github.com/tneely">Taylor Neely</a>
        </div>
      </div>
    );
  }
}

export default App;
