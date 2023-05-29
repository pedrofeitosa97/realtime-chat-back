import z from 'zod'

const messageSchema = z.object({
  userId: z.string(),
  message: z.string(),
})

const messageSchemaRequest = messageSchema.omit({
  userId: true,
})

const messageSchemaResponse = z.array(messageSchema)

export { messageSchema, messageSchemaResponse, messageSchemaRequest }
