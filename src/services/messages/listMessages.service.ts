import { AppDataSource } from '../../data-source'
import { Chat } from '../../entities/chat.entitie'
import { Message } from '../../interfaces/messages.interfaces'
import { messageSchemaResponse } from '../../schemas/messages.schema'

const listMessagesServices = async () => {
  const messageRepository = AppDataSource.getRepository(Chat)
  const messages: any = await messageRepository.find()
  return messages
}

export { listMessagesServices }
