import {
  useMutation,
  useQuery,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'

import { getAllPosts, addPost } from '../apis/all-posts.ts'

export function usePosts() {
  const query = useQuery({
    queryKey: [`posts`],
    queryFn: () => getAllPosts(),
  })
  return {
    ...query,
    addPost: useAddPost(),
  }
}

export function useUserMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })
  return mutation
}

function useAddPost() {
  return useUserMutation(addPost)
}
