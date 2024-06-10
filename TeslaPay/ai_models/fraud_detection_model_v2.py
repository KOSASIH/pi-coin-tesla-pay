import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.preprocessing import StandardScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

class FraudDetectionModelV2:
    def __init__(self):
        self.model = Sequential()
        self.model.add(Dense(64, activation='relu', input_shape=(10,)))
        self.model.add(Dense(32, activation='relu'))
        self.model.add(Dense(1, activation='sigmoid'))
        self.model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

    def train(self, X_train, y_train):
        self.model.fit(X_train, y_train, epochs=10, batch_size=32, validation_split=0.2)

    def predict(self, X_test):
        return self.model.predict(X_test)

    def evaluate(self, X_test, y_test):
        y_pred = self.model.predict(X_test)
        y_pred_class = (y_pred > 0.5).astype(int)
        print('Accuracy:', accuracy_score(y_test, y_pred_class))
        print('Classification Report:')
        print(classification_report(y_test, y_pred_class))
        print('Confusion Matrix:')
        print(confusion_matrix(y_test, y_pred_class))
