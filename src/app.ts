import express, { Application } from 'express'
import cors from 'cors'
import { usersRoutes } from './routes/users/users.routes'

const app: Application = express()

app.use(express.json())
app.use(cors())
app.use('', usersRoutes)

export default app
