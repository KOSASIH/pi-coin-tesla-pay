import { TensorFlow } from 'tensorflow';
import { paymentData } from 'payment-data';

const neuralNetworkPaymentRouting = {};

neuralNetworkPaymentRouting.trainModel = async () => {
  const tensorflowModel = await TensorFlow.loadModel('payment_routing_model');
  const trainingData = paymentData.getTrainingData();
  tensorflowModel.fit(trainingData, { epochs: 10 });
  return tensorflowModel;
};

neuralNetworkPaymentRouting.routePayment = async (paymentData) => {
  const tensorflowModel = await neuralNetworkPaymentRouting.trainModel();
  const routedPayment = await tensorflowModel.predict(paymentData);
  return routedPayment;
};

export default neuralNetworkPaymentRouting;
