import request from 'superagent'
import type { Group, GroupData } from '../../models/group.ts'

// ✅ Point directly to backend server
const rootURL = 'http://localhost:5000/api/v1'

export async function getAllGroups(): Promise<Group[]> {
  const response = await request.get(`${rootURL}/group`)
  console.log('getAllGroups response:', response.body) // debug
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

export async function getGroupById(id: number): Promise<Group> {
  const response = await request.get(`${rootURL}/group/${id}`)
  return response.body as Group
}
