import { PiNetwork } from 'pi-network-sdk';
import { uPort } from 'uport-sdk';

const piAuth = {};

piAuth.authenticate = async (username, password) => {
  const user = await PiNetwork.getUserByUsername(username);
  const piAddress = user.piAddress;
  const balance = await PiNetwork.getBalance(piAddress);
  if (balance >= 0) {
    const uportId = await uPort.createIdentity(piAddress);
    const credentials = await uPort.requestCredentials(uportId, 'pi_coin_balance');
    return credentials;
  } else {
    throw new Error('Insufficient Pi coin balance');
  }
};

piAuth.verify = async (credentials) => {
  const uportId = await uPort.verifyCredentials(credentials);
  const piAddress = await PiNetwork.getAddressFromUportId(uportId);
  const balance = await PiNetwork.getBalance(piAddress);
  if (balance >= 0) {
    return true;
  } else {
    return false;
  }
};

export default piAuth;
