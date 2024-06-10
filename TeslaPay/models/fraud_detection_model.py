import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.preprocessing import StandardScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# Load the dataset
df = pd.read_csv('fraud_detection_data.csv')

# Preprocess the data
X = df.drop(['is_fraud'], axis=1)
y = df['is_fraud']

# Scale the data
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Define the fraud detection model
fraud_detection_model = Sequential()
fraud_detection_model.add(Dense(64, activation='relu', input_shape=(X.shape[1],)))
fraud_detection_model.add(Dense(32, activation='relu'))
fraud_detection_model.add(Dense(1, activation='sigmoid'))

# Compile the model
fraud_detection_model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

# Train the model
fraud_detection_model.fit(X_train, y_train, epochs=10, batch_size=32, validation_data=(X_test, y_test))

# Evaluate the model
y_pred = fraud_detection_model.predict(X_test)
y_pred_class = (y_pred > 0.5).astype(int)
print('Accuracy:', accuracy_score(y_test, y_pred_class))
print('Classification Report:')
print(classification_report(y_test, y_pred_class))
print('Confusion Matrix:')
print(confusion_matrix(y_test, y_pred_class))

# Save the model
fraud_detection_model.save('fraud_detection_model.h5')
