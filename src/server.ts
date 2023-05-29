import http from 'http'
import { Server, Socket } from 'socket.io'
import app from './app'
import { AppDataSource } from './data-source'

const server = http.createServer(app)
export const io = new Server(server)

io.on('connection', (socket: Socket) => {
  console.log('Novo usuário conectado')

  socket.on('set_username', (username: string) => {
    socket.data.username = username
    console.log('Novo nome de usuário:', username)
    io.emit('chat message', username)
  })

  socket.on('message', (message: string) => {
    io.emit('receive_message', {
      message,
      userId: socket.id,
      userName: socket.data.username,
    })
  })

  socket.on('disconnect', (reason) => {
    console.log('Usuário desconectado', socket.id)
  })
})

AppDataSource.initialize()
  .then(() => {
    const port = 3000

    server.listen(port, () => {
      console.log(`Servidor do chat iniciado em http://localhost:${port}`)
    })
    console.log('Database conectada.')
  })
  .catch((error) => console.log(error))
