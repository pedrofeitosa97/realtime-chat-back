import { hash } from 'bcryptjs'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entitie'
import { UserRequest, UserResponse } from '../../interfaces/users.interfaces'
import { userSchemaResponse } from '../../schemas/users.schema'
import { AppError } from '../../errors/AppError'

const createUserService = async (data: UserRequest): Promise<UserResponse> => {
  const { email, name, password } = data
  const userRepository = AppDataSource.getRepository(User)
  const findUser = await userRepository.findOne({
    where: {
      email,
    },
  })

  if (findUser) {
    throw new AppError('Usuário já existe', 409)
  }

  const hashedPassword = await hash(password, 10)

  const user = userRepository.create({
    ...data,
    password: hashedPassword,
  })

  await userRepository.save(user)

  return userSchemaResponse.parse(user)
}

export { createUserService }
