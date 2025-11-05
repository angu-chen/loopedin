import db from './connection.ts'
import { User } from '../../models/user.ts'

const userSelect = [
  'id',
  'auth_Id as authId',
  'username',
  'fullname',
  'location',
  'img',
]

export async function getAllUsers(): Promise<User[]> {
  const userList = await db('user').select(...userSelect)
  return userList as User[]
}
