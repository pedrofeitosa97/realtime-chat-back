import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Chat } from './chat.entitie'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @OneToMany(() => Chat, (chat) => chat.user)
  chats: Chat[]
}
