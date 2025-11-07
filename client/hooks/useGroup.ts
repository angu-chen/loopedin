import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { createGroup, getAllGroups } from '../apis/group.ts'

export function useGroup() {
  const query = useQuery({ queryKey: ['groupList'], queryFn: getAllGroups })

  return {
    ...query,
    // Extra queries go here e.g. addUser: useAddUser()
    useCreateGroup,
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
