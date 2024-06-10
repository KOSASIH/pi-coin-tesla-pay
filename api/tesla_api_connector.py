# tesla_api_connector.py
import requests

class TeslaAPIConnector:
    def __init__(self, api_key, api_secret):
        self.api_key = api_key
        self.api_secret = api_secret

    def get_vehicle_data(self, vehicle_id):
        url = f"https://api.tesla.com/api/1/vehicles/{vehicle_id}/data"
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        response = requests.get(url, headers=headers)
        return response.json()

    def start_charging(self, vehicle_id):
        url = f"https://api.tesla.com/api/1/vehicles/{vehicle_id}/command/charge_start"
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        response = requests.post(url, headers=headers)
        return response.json()
