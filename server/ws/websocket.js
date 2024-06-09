const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log(`Received message => ${message}`);
    // Broadcast message to all connected clients
    wss.clients.forEach((client) => {
      client.send(message);
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
