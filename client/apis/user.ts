import request from 'superagent'
import type { User } from '../../models/user'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getAllUsers(): Promise<User[]> {
  const response = await request.get(`${rootURL}/user`)
  return response.body as User[]
}
