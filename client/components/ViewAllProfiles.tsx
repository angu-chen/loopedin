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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900">
      <div className="flex flex-auto flex-row flex-wrap items-center gap-4 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900">
        {users.map((user) => (
          <ProfileCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}
