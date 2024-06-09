import { TensorFlow } from 'tensorflow';
import { transactionData } from 'transaction-data';

const aiFraudDetection = {};

aiFraudDetection.trainModel = async () => {
  const tensorflowModel = await TensorFlow.loadModel('fraud_detection_model');
  const trainingData = transactionData.getTrainingData();
  tensorflowModel.fit(trainingData, { epochs: 10 });
  return tensorflowModel;
};

aiFraudDetection.detectFraud = async (transactionData) => {
  const tensorflowModel = await aiFraudDetection.trainModel();
  const fraudScore = await tensorflowModel.predict(transactionData);
  return fraudScore;
};

export default aiFraudDetection;
