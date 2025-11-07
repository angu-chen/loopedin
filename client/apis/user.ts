import request from 'superagent'
import type { User, UserData, UserWithPostsAndGroups } from '../../models/user'

const rootURL = new URL(`/api/v1`, document.baseURI)

//GET to http://localhost:5173/api/v1/user
export async function getAllUsers(): Promise<User[]> {
  const response = await request.get(`${rootURL}/user`)
  return response.body as User[]
}

//GET to http://localhost:5173/api/v1/user/auth/:id
export async function getUserByAuthId(authId: string): Promise<User> {
  const response = await request.get(`${rootURL}/user/auth/${authId}`)
  return response.body as User
}

//GET to http://localhost:5173/api/v1/user/user-and-posts/:id
export async function getUserWithPostsAndGroups(
  id: number,
): Promise<UserWithPostsAndGroups> {
  const response = await request.get(`${rootURL}/user/user-and-posts/${id}`)
  return response.body as UserWithPostsAndGroups
}

//GET to http://localhost:5173/api/v1/user/loop/:id
export async function getUserByLoopId(id: number): Promise<User> {
  const response = await request.get(`${rootURL}/user/loop/${id}`)
  return response.body as User
}

//POST to http://localhost:5173/api/v1/user
export async function addNewUser(user: UserData) {
  await request.post(`${rootURL}/user`).send(user)
  return
}
