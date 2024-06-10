import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.preprocessing import StandardScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# Load the dataset
df = pd.read_csv('payment_prediction_data.csv')

# Preprocess the data
X = df.drop(['payment_amount'], axis=1)
y = df['payment_amount']

# Scale the data
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Define the payment prediction model
payment_prediction_model = Sequential()
payment_prediction_model.add(Dense(64, activation='relu', input_shape=(X.shape[1],)))
payment_prediction_model.add(Dense(32, activation='relu'))
payment_prediction_model.add(Dense(1))

# Compile the model
payment_prediction_model.compile(loss='mean_squared_error', optimizer='adam')

# Train the model
payment_prediction_model.fit(X_train, y_train, epochs=10, batch_size=32, validation_data=(X_test, y_test))

# Evaluate the model
y_pred = payment_prediction_model.predict(X_test)
print('Mean Squared Error:', mean_squared_error(y_test, y_pred))
print('R2 Score:', r2_score(y_test, y_pred))

# Save the model
payment_prediction_model.save('payment_prediction_model.h5')
