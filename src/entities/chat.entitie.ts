import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { User } from './user.entitie'

@Entity('chats')
export class Chat {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  message: string

  @Column()
  timestamp: Date

  @ManyToOne(() => User, (user) => user.chats)
  user: User
}
