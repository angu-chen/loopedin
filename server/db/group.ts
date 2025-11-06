import db from './connection.ts'
import { GroupData, Group } from '../../models/group.ts'

const groupSelect = [
  'id',
  'name',
  'description',
  'created_by_user_id as createdByUserId',
]

export async function getAllGroups(): Promise<Group[]> {
  const groupList = await db('groups').select(...groupSelect)
  return groupList as Group[]
}
