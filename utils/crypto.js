import { subtle } from 'crypto';
import { randomBytes } from 'crypto';
import { createHash } from 'crypto';
import { createHmac } from 'crypto';
import { scrypt } from 'crypt-js';
import { ed25519 } from 'ed25519';

const crypto = {};

// Advanced cryptographic functions
crypto.generateKeyPair = async () => {
  const keyPair = await subtle.generateKey({
    name: 'ECDSA',
    namedCurve: 'P-256',
  });
  return keyPair;
};

crypto.sign = async (message, privateKey) => {
  const signature = await subtle.sign({
    name: 'ECDSA',
    hash: { name: 'SHA-256' },
  }, privateKey, message);
  return signature;
};

crypto.verify = async (message, signature, publicKey) => {
  const valid = await subtle.verify({
    name: 'ECDSA',
    hash: { name: 'SHA-256' },
  }, publicKey, signature, message);
  return valid;
};

crypto.encrypt = async (plaintext, publicKey) => {
  const ciphertext = await subtle.encrypt({
    name: 'RSA-OAEP',
    hash: { name: 'SHA-256' },
  }, publicKey, plaintext);
  return ciphertext;
};

crypto.decrypt = async (ciphertext, privateKey) => {
  const plaintext = await subtle.decrypt({
    name: 'RSA-OAEP',
    hash: { name: 'SHA-256' },
  }, privateKey, ciphertext);
  return plaintext;
};

crypto.hash = async (message) => {
  const hash = await createHash('sha256');
  hash.update(message);
  return hash.digest('hex');
};

crypto.hmac = async (message, key) => {
  const hmac = await createHmac('sha256', key);
  hmac.update(message);
  return hmac.digest('hex');
};

crypto.scrypt = async (password, salt) => {
  const derivedKey = await scrypt(password, salt, 16384, 8, 1);
  return derivedKey.toString('hex');
};

crypto.ed25519Sign = async (message, privateKey) => {
  const signature = await ed25519.sign(message, privateKey);
  return signature;
};

crypto.ed25519Verify = async (message, signature, publicKey) => {
  const valid = await ed25519.verify(message, signature, publicKey);
  return valid;
};

export default crypto;
