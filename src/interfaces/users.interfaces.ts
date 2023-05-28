import z from 'zod'
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
} from '../schemas/users.schema'

type User = z.infer<typeof userSchema>
type UserRequest = z.infer<typeof userSchemaRequest>
type UserResponse = z.infer<typeof userSchemaResponse>

export { User, UserRequest, UserResponse }
