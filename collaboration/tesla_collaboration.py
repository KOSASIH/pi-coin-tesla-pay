# tesla_collaboration.py
import socket

class TeslaCollaboration:
    def __init__(self, host, port):
        self.host = host
        self.port = port
        self.socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    def connect(self):
        self.socket.connect((self.host, self.port))

    def send_message(self, message):
        self.socket.send(message.encode())

    def receive_message(self):
        return self.socket.recv(1024).decode()
