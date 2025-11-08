import request from 'superagent'
import type { Group, GroupData } from '../../models/group.ts'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getAllGroups(): Promise<Group[]> {
  const response = await request.get(`${rootURL}/group`)
  return response.body as Group[]
}

export async function createGroup(group: GroupData) {
  await request.post(`${rootURL}/group`).send(group)
  return
}

export async function getGroupsByUserId(id: number): Promise<Group[]> {
  const response = await request.get(`${rootURL}/group/for-user/${id}`)
  return response.body as Group[]
}
