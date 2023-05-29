import { Request, Response } from 'express'
import { createMessageService } from '../../services/messages/createMessage.service'
import { listMessagesServices } from '../../services/messages/listMessages.service'

const createMessageController = async (req: Request, res: Response) => {
  const userId = res.locals.userId
  const newMessage = await createMessageService(req.body, userId)
  return res.status(201).json(newMessage)
}
const listMessagesController = async (req: Request, res: Response) => {
  const messages = await listMessagesServices()
  return res.json(messages)
}

export { createMessageController, listMessagesController }
