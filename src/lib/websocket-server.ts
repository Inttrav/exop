import { WebSocketServer } from 'ws';
import { createServer } from 'http';
import { parse } from 'url';

const server = createServer();
const wss = new WebSocketServer({ noServer: true });

const clients = new Set();

wss.on('connection', (ws) => {
  clients.add(ws);

  ws.on('close', () => {
    clients.delete(ws);
  });
});

server.on('upgrade', (request, socket, head) => {
  const { pathname } = parse(request.url!);

  if (pathname === '/ws') {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});

export function broadcastTransaction(transaction: any) {
  const message = JSON.stringify({
    type: 'transaction.created',
    data: transaction,
  });

  clients.forEach((client: any) => {
    if (client.readyState === 1) { // WebSocket.OPEN
      client.send(message);
    }
  });
}

const PORT = process.env.WS_PORT || 3001;
server.listen(PORT, () => {
  console.log(`WebSocket server is running on port ${PORT}`);
}); 