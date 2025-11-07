import ViewProfileDetail from './ViewProfileDetail'
import { useAuth0 } from '@auth0/auth0-react'

export default function ViewProfilePage() {
  const { user: auth0user, isLoading, isAuthenticated } = useAuth0()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!auth0user || !auth0user.sub || !isAuthenticated) {
    return <p>Please log in</p>
  }
  return (
    <>
      <ViewProfileDetail authId={auth0user.sub} />
    </>
  )
}
