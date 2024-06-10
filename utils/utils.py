# utils.py
import numpy as np
import pandas as pd

def load_data(file_name):
    return pd.read_csv(file_name)

def preprocess_data(data):
    # Perform any necessary data preprocessing here
    pass

def split_data(X, y, test_size=0.2, random_state=42):
    return train_test_split(X, y, test_size=test_size, random_state=random_state)

def train_model(model, X_train, y_train):
    model.fit(X_train, y_train)

def evaluate_model(model, X_test, y_test):
    y_pred = model.predict(X_test)
    print("Mean Squared Error:", mean_squared_error(y_test, y_pred))
    print("R^2 Score:", r2_score(y_test, y_pred))

def save_model(model, file_name):
    import joblib
    joblib.dump(model, file_name)

def load_model(file_name):
    import joblib
    return joblib.load(file_name)
