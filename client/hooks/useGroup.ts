import { useQuery } from '@tanstack/react-query'

import { getAllGroups } from '../apis/group.ts'

export function useGroup() {
  const query = useQuery({ queryKey: ['groupList'], queryFn: getAllGroups })

  return {
    ...query,
    // Extra queries go here e.g. addUser: useAddUser()
  }
}
