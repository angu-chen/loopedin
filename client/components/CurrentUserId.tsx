import { useGetUserByAuthId } from '../hooks/useUser'
import ViewProfileWithId from './ViewProfileWithId'

interface Props {
  authId: string
}

export default function CurrentUserId({ authId }: Props) {
  const { data: user, isPending, isError } = useGetUserByAuthId(authId)

  if (isError) {
    return <p>Something went wrong</p>
  }

  if (isPending || !user) {
    return <p>Loading...</p>
  }

  return <ViewProfileWithId id={user.id} />
}
