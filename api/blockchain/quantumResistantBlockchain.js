import { LatticeCrypto } from 'lattice-crypto-sdk';

const quantumResistantBlockchain = {};

quantumResistantBlockchain.createBlock = async (transactions) => {
  const block = await LatticeCrypto.createBlock(transactions);
  return block;
};

quantumResistantBlockchain.validateBlock = async (block) => {
  const isValid = await LatticeCrypto.validateBlock(block);
  return isValid;
};

export default quantumResistantBlockchain;
