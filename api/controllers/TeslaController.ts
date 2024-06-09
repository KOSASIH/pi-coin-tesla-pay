import { Request, Response } from 'express';
import TeslaApi from '../api/TeslaApi';

class TeslaController {
  async getVehicles(req: Request, res: Response) {
    const teslaApi = new TeslaApi('https://api.tesla.com', 'YOUR_TESLA_ACCESS_TOKEN');
    const vehicles = await teslaApi.getVehicles();
    res.json(vehicles);
  }

  async getVehicleById(req: Request, res: Response) {
    const teslaApi = new TeslaApi('https://api.tesla.com', 'YOUR_TESLA_ACCESS_TOKEN');
    const id = req.params.id;
    const vehicle = await teslaApi.getVehicleById(id);
    res.json(vehicle);
  }
}

export default TeslaController;
