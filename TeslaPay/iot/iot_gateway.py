import os
import json
from pyserial import Serial

class IoTGateway:
    def __init__(self):
        self.serial = Serial('COM3', 9600, timeout=1)

    def send_payment_confirmation(self, payment_confirmation):
        self.serial.write(f'Payment confirmed: {payment_confirmation}\n'.encode())
