import z from 'zod'
import {
  messageSchema,
  messageSchemaResponse,
  messageSchemaRequest,
} from '../schemas/messages.schema'

type Message = z.infer<typeof messageSchema>
type MessageRequest = z.infer<typeof messageSchemaRequest>
type MessageResponse = z.infer<typeof messageSchema>
type MessagesResponse = z.infer<typeof messageSchemaResponse>

export { Message, MessageResponse, MessagesResponse, MessageRequest }
