import { FaceRecognition } from 'face-recognition-sdk';
import { FingerprintScanning } from 'fingerprint-scanning-sdk';

const biometricAuth = {};

biometricAuth.authenticate = async (username, password) => {
  const faceRecognitionResult = await FaceRecognition.recognizeFace(username);
  const fingerprintScanningResult = await FingerprintScanning.scanFingerprint(username);
  if (faceRecognitionResult && fingerprintScanningResult) {
    return true;
  } else {
    return false;
  }
};

export default biometricAuth;
