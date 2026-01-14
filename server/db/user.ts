import db from './connection.ts'
import { User, UserData } from '../../models/user.ts'
import connection from './connection.ts'

const userSelect = [
  'user.id as id',
  'auth_Id as authId',
  'username',
  'fullname',
  'location',
  'img',
  'bio',
  'cover_img as coverImg',
]

// const postSelect = ['post.id as postId', 'text', 'created_at as createdAt']

export async function getAllUsers(): Promise<User[]> {
  const userList = await db('user').select(...userSelect)
  return userList as User[]
}

export async function getUserByAuthId(
  authId: string,
): Promise<User | undefined> {
  const user = await db('user')
    .where('auth_id', authId)
    .select(...userSelect)
    .first()
  return user as User | undefined
}

export async function getUserByLoopId(id: number): Promise<User | undefined> {
  const user = await db('user')
    .where({ id })
    .select(...userSelect)
    .first()
  return user as User | undefined
}

export async function addUser(user: UserData) {
  const response = await db('user').insert({
    auth_id: user.authId,
    username: user.username,
    fullname: user.fullname,
    location: user.location,
    img: user.img,
  })

  return response
}

export async function updateUser(id: number, user: UserData): Promise<User> {
  const updated = await connection('user')
    .where({ id })
    .update(user)
    .returning('*')
  return updated[0] as User
}
