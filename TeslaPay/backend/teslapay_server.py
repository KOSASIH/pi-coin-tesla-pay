import os
import json
import asyncio
from aiohttp import web
from tensorflow.keras.models import load_model
from sklearn.preprocessing import StandardScaler
from blockchain_connector import BlockchainConnector
from iot_gateway import IoTGateway

# Load fraud detection model
fraud_detection_model = load_model('fraud_detection_model.h5')

# Load payment prediction model
payment_prediction_model = load_model('payment_prediction_model.h5')

# Create a BlockchainConnector instance
blockchain_connector = BlockchainConnector()

# Create an IoTGateway instance
iot_gateway = IoTGateway()

# Define the TeslaPay server
class TeslaPayServer:
    def __init__(self):
        self.app = web.Application()
        self.app.add_routes([web.post('/process_payment', self.process_payment)])

    async def process_payment(self, request):
        # Get payment data from request
        payment_data = await request.json()

        # Preprocess payment data
        payment_data = self.preprocess_payment_data(payment_data)

        # Check for fraud using the fraud detection model
        fraud_score = fraud_detection_model.predict(payment_data)
        if fraud_score > 0.5:
            return web.Response(text='Fraud detected', status=400)

        # Predict payment outcome using the payment prediction model
        payment_outcome = payment_prediction_model.predict(payment_data)

        # Process payment using the blockchain connector
        transaction_hash = blockchain_connector.process_payment(payment_data, payment_outcome)

        # Send payment confirmation to IoT device
        iot_gateway.send_payment_confirmation(transaction_hash)

        return web.Response(text='Payment processed successfully', status=200)

    def preprocess_payment_data(self, payment_data):
        # Preprocess payment data using StandardScaler
        scaler = StandardScaler()
        payment_data = scaler.transform(payment_data)
        return payment_data

# Create a TeslaPayServer instance
teslapay_server = TeslaPayServer()

# Run the TeslaPay server
if __name__ == '__main__':
    web.run_app(teslapay_server.app, port=8080)
