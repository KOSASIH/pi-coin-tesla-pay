import axios from 'axios';

class PiNetworkAPI {
  async createTransaction(amount: number, piAddress: string) {
    const url = `https://api.pi.network/v1/transactions`;
    const headers = { 'Content-Type': 'application/json' };
    const data = { amount, piAddress };
    const response = await axios.post(url, data, headers);
    return response.data;
  }
}

export { PiNetworkAPI };
