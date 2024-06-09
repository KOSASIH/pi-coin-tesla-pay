import { FaceRecognition } from 'face-recognition-sdk';
import { FingerprintScanning } from 'fingerprint-scanning-sdk';
import { TeslaAPI } from 'tesla-api-sdk';

const biometricAuthTesla = {};

biometricAuthTesla.authenticate = async (username, password) => {
  const faceRecognitionResult = await FaceRecognition.recognizeFace(username);
  const fingerprintScanningResult = await FingerprintScanning.scanFingerprint(username);
  if (faceRecognitionResult && fingerprintScanningResult) {
    const teslaAPI = await TeslaAPI.authenticate(username, password);
    return teslaAPI;
  } else {
    return null;
  }
};

export default biometricAuthTesla;
