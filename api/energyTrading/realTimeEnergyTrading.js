import { TeslaEnergyTrading } from 'tesla-energy-trading-sdk';

const realTimeEnergyTrading = {};

realTimeEnergyTrading.tradeEnergy = async (user, energyAmount) => {
  const teslaEnergyTrading = await TeslaEnergyTrading.authenticate(user);
  const tradeResult = await teslaEnergyTrading.tradeEnergy(energyAmount);
  return tradeResult;
};

export default realTimeEnergyTrading;
