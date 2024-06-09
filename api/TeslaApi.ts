import axios, { AxiosInstance } from 'axios';

interface TeslaApiResponse {
  data: any;
  error: string;
}

class TeslaApi {
  private readonly axiosInstance: AxiosInstance;

  constructor(private readonly baseUrl: string, private readonly accessToken: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  async getVehicles(): Promise<TeslaApiResponse> {
    const response = await this.axiosInstance.get('/vehicles');
    return response.data;
  }

  async getVehicleById(id: number): Promise<TeslaApiResponse> {
    const response = await this.axiosInstance.get(`/vehicles/${id}`);
    return response.data;
  }

  async wakeUpVehicle(id: number): Promise<TeslaApiResponse> {
    const response = await this.axiosInstance.post(`/vehicles/${id}/wake_up`);
    return response.data;
  }

  async startCharging(id: number): Promise<TeslaApiResponse> {
    const response = await this.axiosInstance.post(`/vehicles/${id}/start_charging`);
    return response.data;
  }
}

export default TeslaApi;
