import request from 'superagent'
import type { User, UserData } from '../../models/user'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getAllUsers(): Promise<User[]> {
  const response = await request.get(`${rootURL}/user`)
  return response.body as User[]
}

export async function addNewUser(user: UserData) {
  await request.post(`${rootURL}/user`).send(user)
  return
}
