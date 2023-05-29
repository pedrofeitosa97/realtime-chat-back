import { Router } from 'express'
import { createUserController } from '../../controllers/users/users.controller'
import { ensureDataIsValidMiddleware } from '../../middlewares/ensureDataIsValid.middleware'
import { userSchemaRequest } from '../../schemas/users.schema'

const usersRoutes = Router()

usersRoutes.post(
  '',
  ensureDataIsValidMiddleware(userSchemaRequest),
  createUserController
)

export { usersRoutes }
