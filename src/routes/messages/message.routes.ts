import { Router } from 'express'
import {
  createMessageController,
  listMessagesController,
} from '../../controllers/messages/messages.controller'
import { ensureAuthMiddleware } from '../../middlewares/ensureAuth.middleware'

const messageRoutes = Router()

messageRoutes.post('', ensureAuthMiddleware, createMessageController)
messageRoutes.get('', listMessagesController)

export { messageRoutes }
