import { PiNetworkAPI } from './pi-network-api';
import { TeslaAPI } from './tesla-api';

class PaymentGateway {
  async processPayment(amount: number, paymentMethod: string) {
    if (paymentMethod === 'pi') {
      const piNetworkAPI = new PiNetworkAPI();
      return piNetworkAPI.createTransaction(amount, 'user-pi-address');
    } else if (paymentMethod === 'tesla') {
      const teslaAPI = new TeslaAPI();
      return teslaAPI.createPayment(amount, 'user-tesla-token');
    } else {
      throw new Error('Invalid payment method');
    }
  }
}

export { PaymentGateway };
