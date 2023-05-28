import { Request, Response } from 'express'
import { UserRequest } from '../../interfaces/users.interfaces'
import { createUserService } from '../../services/users/createUser.service'

const createUserController = async (req: Request, res: Response) => {
  const data = req.body
  const newUser = await createUserService(data)
  return res.status(201).json(newUser)
}

export { createUserController }
