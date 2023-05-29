import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entitie'
import { AppError } from '../../errors/AppError'
import { LoginRequest } from '../../interfaces/login.interfaces'
import jwt from 'jsonwebtoken'
import { compare } from 'bcryptjs'
import 'dotenv/config'

const createTokenService = async ({
  email,
  password,
}: LoginRequest): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOne({
    where: {
      email,
    },
  })

  if (!user) {
    throw new AppError('Credenciais inválidas', 403)
  }

  const passwordMatch = await compare(password, user.password)

  if (!passwordMatch) {
    throw new AppError('Credenciais inválidas', 403)
  }

  console.log(user)

  const token = jwt.sign(
    {
      userName: user.name,
      photo: user.photo,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: '1h',
      subject: user.id,
    }
  )

  return token
}

export { createTokenService }
