import { LatticeCrypto } from 'lattice-crypto-sdk';

const quantumResistantEncryption = {};

quantumResistantEncryption.encrypt = async (plaintext, publicKey) => {
  const ciphertext = await LatticeCrypto.encrypt(plaintext, publicKey);
  return ciphertext;
};

quantumResistantEncryption.decrypt = async (ciphertext, privateKey) => {
  const plaintext = await LatticeCrypto.decrypt(ciphertext, privateKey);
  return plaintext;
};

export default quantumResistantEncryption;
