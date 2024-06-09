import { FaceRecognition } from 'face-recognition-sdk';
import { FingerprintScanning } from 'fingerprint-scanning-sdk';
import { LivenessDetection } from 'liveness-detection-sdk';

const biometricAuthWithLivenessDetection = {};

biometricAuthWithLivenessDetection.authenticate = async (username, password) => {
  const faceRecognitionResult = await FaceRecognition.recognizeFace(username);
  const fingerprintScanningResult = await FingerprintScanning.scanFingerprint(username);
  const livenessDetectionResult = await LivenessDetection.detectLiveness(username);
  if (faceRecognitionResult && fingerprintScanningResult && livenessDetectionResult) {
    const piCoinWallet = await PiCoinWallet.authenticate(username, password);
    return piCoinWallet;
  } else {
    return null;
  }
};

export default biometricAuthWithLivenessDetection;
