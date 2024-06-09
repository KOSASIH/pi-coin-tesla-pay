import { TensorFlow } from 'tensorflow';
import { paymentGateways } from 'tesla-payment-gateways';

const aiPaymentRouter = {};

aiPaymentRouter.optimize = async (transaction) => {
  const tensorflowModel = await TensorFlow.loadModel('payment_routing_model');
  const inputFeatures = [
    transaction.amount,
    transaction.currency,
    transaction.paymentMethod,
  ];
  const output = await tensorflowModel.predict(inputFeatures);
  const optimizedGateway = paymentGateways[output.gatewayIndex];
  return optimizedGateway;
};

export default aiPaymentRouter;
