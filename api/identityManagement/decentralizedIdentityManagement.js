import { Blockchain } from 'blockchain-sdk';

const decentralizedIdentityManagement = {};

decentralizedIdentityManagement.createIdentity = async (username) => {
  const blockchain = await Blockchain.create();
  const identity = await blockchain.createIdentity(username);
  return identity;
};

decentralizedIdentityManagement.manageIdentity = async (username, identityData) => {
  const blockchain = await Blockchain.create();
  const updatedIdentity = await blockchain.updateIdentity(username, identityData);
  return updatedIdentity;
};

export default decentralizedIdentityManagement;
