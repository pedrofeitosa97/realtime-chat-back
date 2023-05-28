import { Router } from 'express'
import { createUserController } from '../../controllers/users/users.controller'

const usersRoutes = Router()

usersRoutes.post('/users', createUserController)

export { usersRoutes }
