import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import {
  addNewUser,
  getAllUsers,
  getUserByAuthId,
  getUserByLoopId,
  getUserAndPostsByLoopId,
} from '../apis/user.ts'

export function useGetAllUsers() {
  const query = useQuery({ queryKey: ['userList'], queryFn: getAllUsers })
  return {
    ...query,
  }
}

export function useGetUserByAuthId(id: string) {
  const query = useQuery({
    queryKey: [`userAuth${id}`],
    queryFn: () => getUserByAuthId(id),
  })
  return {
    ...query,
  }
}

export function useGetUserByLoopId(id: number) {
  const query = useQuery({
    queryKey: [`userLoop${id}`],
    queryFn: () => getUserByLoopId(id),
  })
  return {
    ...query,
  }
}

export function useGetUserAndPostsByLoopId(id: number) {
  const query = useQuery({
    queryKey: [`userLoop${id}`],
    queryFn: () => getUserAndPostsByLoopId(id),
  })
  return {
    ...query,
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

export function useAddUserMutation() {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: addNewUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userList'] })
    },
  })
  return mutation
}

// function useAddUser() {
//   return useUserMutation(addNewUser)
// }
