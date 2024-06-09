const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
  console.log('Connected to WebSocket server');

  // Send transaction updates to the server
  setInterval(() => {
    const transactionData = {
      id: 1,
      amount: 100,
      timestamp: new Date(),
    };
    ws.send(JSON.stringify(transactionData));
  }, 1000);
});

ws.on('message', (message) => {
  console.log(`Received message => ${message}`);
  // Update the dashboard with the new transaction data
  updateDashboard(message);
});

ws.on('close', () => {
  console.log('Disconnected from WebSocket server');
});
