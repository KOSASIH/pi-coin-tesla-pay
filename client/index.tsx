import React, { useState } from 'react';
import { PaymentGateway } from './payment-gateway';

const App = () => {
  const [amount, setAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('pi');

  const handlePayment = async () => {
    const paymentGateway = new PaymentGateway();
    try {
const response = await paymentGateway.processPayment(amount, paymentMethod);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Pay with Pi Coin or Tesla</h1>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.valueAsNumber)} />
      <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
        <option value="pi">Pi Coin</option>
        <option value="tesla">Tesla</option>
      </select>
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default App;
