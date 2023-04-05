const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3001 });

server.on('connection', ws => {
    console.log('Client connected');

    ws.on('message', message => {
        console.log('Received message:', message);
        const data = JSON.parse(message);
        const broadcastMessage = `${data.username}: ${data.message}`;
        server.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(broadcastMessage);
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
