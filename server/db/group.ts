import db from './connection.ts'
import { GroupData, Group } from '../../models/group.ts'

const groupSelect = [
  'groups.id as id',
  'name',
  'description',
  'created_by_user_id as createdByUserId',
]

export async function getAllGroups(): Promise<Group[]> {
  const groupList = await db('groups').select(...groupSelect)
  return groupList as Group[]
}

export async function createGroup(group: GroupData) {
  const response = await db('groups').insert({
    name: group.name,
    description: group.description,
    created_by_user_id: group.createdByUserId,
  })
  return response
}

export async function getGroupByUserId(id: number) {
  const response = await db('group_members')
    .where('group_members.user_id', id)
    .join('groups', 'groups.id', 'group_members.group_id')
    .select(...groupSelect)
  return response as Group[]
}
