import { TeslaAPI } from 'tesla-api-sdk';

const teslaTelemetry = {};

teslaTelemetry.getVehicleData = async (vehicleId) => {
  const vehicleData = await TeslaAPI.getVehicleData(vehicleId);
  return vehicleData;
};

teslaTelemetry.streamVehicleData = async (vehicleId) => {
  const vehicleDataStream = await TeslaAPI.streamVehicleData(vehicleId);
  return vehicleDataStream;
};

export default teslaTelemetry;
