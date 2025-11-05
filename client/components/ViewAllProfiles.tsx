import { useUser } from '../hooks/useUser'
import type { User } from '../../models/user'
import ProfileCard from './ProfileCard'

export default function ViewAllProfiles() {
  const userQuery = useUser()

  if (userQuery.isError) {
    return <p>Error loading profiles</p>
  }

  if (userQuery.isPending || !userQuery.data) {
    return <p>Loading...</p>
  }

  const users: User[] = userQuery.data
  return (
    <div className="bg-cream m-4 flex flex-auto flex-row flex-wrap items-center gap-10">
      {users.map((user) => (
        <ProfileCard key={user.id} user={user} />
      ))}
    </div>
  )
}
