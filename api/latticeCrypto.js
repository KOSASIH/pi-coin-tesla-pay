import { LatticeCrypto } from 'lattice-crypto-sdk';

const latticeCrypto = {};

latticeCrypto.encrypt = async (plaintext, publicKey) => {
  const ciphertext = await LatticeCrypto.encrypt(plaintext, publicKey);
  return ciphertext;
};

latticeCrypto.decrypt = async (ciphertext, privateKey) => {
  const plaintext = await LatticeCrypto.decrypt(ciphertext, privateKey);
  return plaintext;
};

export default latticeCrypto;
