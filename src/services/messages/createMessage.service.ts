import { AppDataSource } from '../../data-source'
import { Chat } from '../../entities/chat.entitie'
import { User } from '../../entities/user.entitie'
import { AppError } from '../../errors/AppError'
import { MessageResponse, Message } from '../../interfaces/messages.interfaces'
import {
  messageSchema,
  messageSchemaRequest,
} from '../../schemas/messages.schema'

const createMessageService = async (
  data: Message,
  userId: string,
  userName: string
) => {
  const messageRepository = AppDataSource.getRepository(Chat)
  const userRepository = AppDataSource.getRepository(User)

  const user: User | null = await userRepository.findOneBy({
    id: userId,
  })

  if (!user) {
    throw new AppError('Usuário não encontrado', 404)
  }

  const timestamp = new Date()

  console.log(data)

  const chatData = {
    user,
    userName,
    timestamp,
    ...data,
  }

  const message: any = messageRepository.create(chatData)

  await messageRepository.save(message)

  return message
}

export { createMessageService }
