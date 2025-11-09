import { useGetAllUsers } from '../hooks/useUser'
import type { User } from '../../models/user'
import ProfileCard from './ProfileCard'
import { useAuth0 } from '@auth0/auth0-react'
import SignIn from './SignIn'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export default function ViewAllProfiles() {
  const userQuery = useGetAllUsers()
  const { user: auth0user } = useAuth0()
  const currentAuthId = auth0user && auth0user.sub ? auth0user.sub : null

  if (!currentAuthId) {
    return <SignIn />
  }

  if (userQuery.isError) {
    return <p>Error loading profiles</p>
  }

  if (userQuery.isPending || !userQuery.data) {
    return <p>Loading...</p>
  }

  const users: User[] = userQuery.data

  return (
    <div className="text-center ">
      <IfAuthenticated>
        {' '}
        <h2 className="px-8 py-10 text-3xl font-bold text-gray-700">
          Profiles
        </h2>
        <div className="bg-cream m-4 flex flex-auto flex-row flex-wrap items-center gap-10">
          {users.map(
            (user) =>
              user.authId !== currentAuthId && (
                <ProfileCard key={user.id} user={user} />
              ),
          )}
        </div>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <SignIn />
      </IfNotAuthenticated>
    </div>
  )
}
