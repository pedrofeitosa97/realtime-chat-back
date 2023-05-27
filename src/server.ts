import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket: Socket) => {
  console.log('Novo usuário conectado');

  socket.on('chat message', (message: string) => {
    console.log('Mensagem recebida:', message);
    io.emit('chat message', message);
  });

  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
});

const port = 3000;

server.listen(port, () => {
  console.log(`Servidor do chat iniciado em http://localhost:${port}`);
});
