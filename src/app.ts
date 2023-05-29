import 'express-async-errors'
import 'reflect-metadata'
import express, { Application } from 'express'
import cors from 'cors'
import { usersRoutes } from './routes/users/users.routes'
import { handleAppErrorMiddleware } from './middlewares/handleAppError.middleware'
import { loginRoutes } from './routes/session/login.routes'
import { messageRoutes } from './routes/messages/message.routes'

const app: Application = express()

app.use(express.json())
app.use(cors())
app.use('/users', usersRoutes)
app.use('/login', loginRoutes)
app.use('/messages', messageRoutes)

app.use(handleAppErrorMiddleware)

export default app
