import { useAuth0 } from '@auth0/auth0-react'
import CurrentUserId from './CurrentUserId'
import SignIn from './SignIn'

export default function AuthId() {
  const { user, error, isLoading } = useAuth0()

  if (error) {
    return <SignIn />
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!user || !user.sub) {
    return <SignIn />
  }

  return <CurrentUserId authId={user.sub} />
}
