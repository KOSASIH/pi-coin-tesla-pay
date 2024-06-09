import { TensorFlow } from 'tensorflow';
import { paymentData } from 'payment-data';

const aiPaymentForecaster = {};

aiPaymentForecaster.trainModel = async () => {
  const tensorflowModel = await TensorFlow.loadModel('payment_forecasting_model');
  const trainingData = paymentData.getTrainingData();
  tensorflowModel.fit(trainingData, { epochs: 10 });
  return tensorflowModel;
};

aiPaymentForecaster.forecast = async (userPaymentData) => {
  const tensorflowModel = await aiPaymentForecaster.trainModel();
  const forecast = await tensorflowModel.predict(userPaymentData);
  return forecast;
};

export default aiPaymentForecaster;
