import request from 'superagent'
import type { Group } from '../../models/group.ts'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getAllGroups(): Promise<Group[]> {
  const response = await request.get(`${rootURL}/group`)
  return response.body as Group[]
}
