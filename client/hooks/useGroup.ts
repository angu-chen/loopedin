import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { createGroup, getAllGroups, getGroupsByUserId } from '../apis/group.ts'

export function useGroup() {
  const query = useQuery({ queryKey: ['groupList'], queryFn: getAllGroups })
  const createGroup = useCreateGroup()
  return {
    ...query,
    // Extra queries go here e.g. addUser: useAddUser()
    createGroup,
  }
}

export function useGetGroupsByUserId(id: number) {
  const query = useQuery({
    queryKey: [`groupsForUser${id}`],
    queryFn: () => getGroupsByUserId(id),
  })
  return {
    ...query,
  }
}

function useCreateGroup() {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: createGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['groupList'] })
    },
  })
  return mutation
}
