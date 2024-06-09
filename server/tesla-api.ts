import axios from 'axios';

class TeslaAPI {
  async createPayment(amount: number, teslaToken: string) {
    const url = `https://api.tesla.com/v1/payments`;
    const headers = { 'Authorization': `Bearer ${teslaToken}`, 'Content-Type': 'application/json' };
    const data = { amount };
    const response = await axios.post(url, data, headers);
    return response.data;
  }
}

export { TeslaAPI };
