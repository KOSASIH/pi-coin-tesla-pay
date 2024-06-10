import os
import json
from pyserial import Serial

# Define the IoTGateway class
class IoTGateway:
    def __init__(self):
        self.serial = Serial('COM3', 9600, timeout=1)

    def send_payment_confirmation(self, transaction_hash):
        # Send payment confirmation to IoT device
        self.serial.write(f'Payment confirmed: {transaction_hash}\n'.encode())
