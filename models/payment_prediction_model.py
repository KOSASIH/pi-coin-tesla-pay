# payment_prediction_model.py
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score

class PaymentPredictionModel:
    def __init__(self, data_file):
        self.data_file = data_file
        self.data = None
        self.X_train = None
        self.X_test = None
        self.y_train = None
        self.y_test = None
        self.model = None

    def load_data(self):
        self.data = pd.read_csv(self.data_file)

    def preprocess_data(self):
        # Perform any necessary data preprocessing here
        pass

    def split_data(self):
        self.X = self.data.drop('payment_amount', axis=1)
        self.y = self.data['payment_amount']
        self.X_train, self.X_test, self.y_train, self.y_test = train_test_split(self.X, self.y, test_size=0.2, random_state=42)

    def train_model(self):
        self.model = RandomForestRegressor(n_estimators=100, random_state=42)
        self.model.fit(self.X_train, self.y_train)

    def evaluate_model(self):
        y_pred = self.model.predict(self.X_test)
        print("Mean Squared Error:", mean_squared_error(self.y_test, y_pred))
        print("R^2 Score:", r2_score(self.y_test, y_pred))

    def save_model(self, file_name):
        import joblib
        joblib.dump(self.model, file_name)

    def load_model(self, file_name):
        import joblib
        self.model = joblib.load(file_name)
