import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getAllUsers } from '../apis/user.ts'

export function useUser() {
  const query = useQuery({ queryKey: ['userList'], queryFn: getAllUsers })
  return {
    ...query,
    // Extra queries go here e.g. addUser: useAddUser()
  }
}

export function useUserMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userList'] })
    },
  })

  return mutation
}

// Query functions go here e.g. useAddUser
/* function useAddUser() {
  return useUserMutation(addUser)
} */
