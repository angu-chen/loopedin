import { useQuery } from '@tanstack/react-query' 
import type { Group } from '../../models/group'
import request from 'superagent'

// Mock groups data (can be uncommented for testing)
// const mockGroups: Group[] = [
//   { id: 1, name: 'Group 1', description: 'This is group 1', createdByUserId: 1 },
//   { id: 2, name: 'Group 2', description: 'This is group 2', createdByUserId: 2 },
//   { id: 3, name: 'Group 3', description: 'This is group 3', createdByUserId: 1 },
// ]

const API_ROOT = '/api/v1'

// Hook to get all groups
export function useGroup(useMock: boolean = false) {
  return useQuery<Group[]>({
    queryKey: ['groupList'],
    queryFn: async () => {
      if (useMock) {
        // Uncomment the next line to use mock data
        // return mockGroups
        return []
      }
      const res = await request.get(`${API_ROOT}/group`)
      return res.body as Group[]
    },
  })
}

// Hook to get a single group by ID
export function useGroupById(id: number, useMock: boolean = false) {
  return useQuery<Group>({
    queryKey: ['group', id],
    queryFn: async () => {
      if (useMock) {
        // Uncomment the next line to use mock data
        // const group = mockGroups.find((g) => g.id === id)
        // if (!group) throw new Error('Group not found')
        // return group
        return {
          id,
          name: `Group ${id}`,
          description: `This is mock group ${id}`,
          createdByUserId: 1,
          members: [],
        } as Group
      }
      const res = await request.get(`${API_ROOT}/group/${id}`)
      if (!res.body) throw new Error('Group not found')
      return res.body as Group
    },
  })
}
