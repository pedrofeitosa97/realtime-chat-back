import { Request, Response } from 'express'
import { createMessageService } from '../../services/messages/createMessage.service'
import { listMessagesServices } from '../../services/messages/listMessages.service'
import { io } from '../../server'

const createMessageController = async (req: Request, res: Response) => {
  const userId = res.locals.userId
  const userName = res.locals.userName
  const newMessage = await createMessageService(req.body, userId, userName)
  return res.status(201).json(newMessage)
}
const listMessagesController = async (req: Request, res: Response) => {
  try {
    const messages = await listMessagesServices()
    io.emit('messageHistory', messages)

    return res.json(messages)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Erro ao listar as mensagens' })
  }
}

export { createMessageController, listMessagesController }
