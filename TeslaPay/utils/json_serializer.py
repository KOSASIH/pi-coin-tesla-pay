import json

class JsonSerializer:
    def __init__(self, file_path):
        self.file_path = file_path

    def serialize(self, data):
        with open(self.file_path, 'w') as f:
            json.dump(data, f)

    def deserialize(self):
        with open(self.file_path, 'r') as f:
            return json.load(f)
