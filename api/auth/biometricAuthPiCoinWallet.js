import { FaceRecognition } from 'face-recognition-sdk';
import { FingerprintScanning } from 'fingerprint-scanning-sdk';
import { PiCoinWallet } from 'pi-coin-wallet-sdk';

const biometricAuthPiCoinWallet = {};

biometricAuthPiCoinWallet.authenticate = async (username, password) => {
  const faceRecognitionResult = await FaceRecognition.recognizeFace(username);
  const fingerprintScanningResult = await FingerprintScanning.scanFingerprint(username);
  if (faceRecognitionResult && fingerprintScanningResult) {
    const piCoinWallet = await PiCoinWallet.authenticate(username, password);
    return piCoinWallet;
  } else {
    return null;
  }
};

export default biometricAuthPiCoinWallet;
