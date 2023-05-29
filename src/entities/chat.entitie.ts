import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { User } from './user.entitie'

@Entity('chats')
export class Chat {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  message: string

  @Column()
  timestamp: Date

  @Column()
  userId: string
}
