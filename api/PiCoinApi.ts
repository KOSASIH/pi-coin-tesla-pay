import axios, { AxiosInstance } from 'axios';

interface PiCoinApiResponse {
  data: any;
  error: string;
}

class PiCoinApi {
  private readonly axiosInstance: AxiosInstance;

  constructor(private readonly baseUrl: string, private readonly accessToken: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  async getBalance(): Promise<PiCoinApiResponse> {
    const response = await this.axiosInstance.get('/balance');
    return response.data;
  }

  async transfer(amount: number, recipient: string): Promise<PiCoinApiResponse> {
    const response = await this.axiosInstance.post('/transfer', { amount, recipient });
    return response.data;
  }
}

export default PiCoinApi;
