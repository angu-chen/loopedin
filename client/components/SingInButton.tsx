import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

function SignInButton() {
  const authData = useAuth0()

  const user = {
    nickname: authData.user?.nickname,
  }

  const handleSignOut = () => {
    authData.logout()
  }

  const handleSignIn = () => {
    authData.loginWithPopup()
  }

  return (
    <div className="flex gap-1">
      <IfAuthenticated>
        {user && <p>Signed in as: {user?.nickname}</p>}

        <button
          className="rounded-sm bg-[--color-lightBlue] px-1"
          onClick={handleSignOut}
        >
          Sign out
        </button>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button
          className="rounded-sm bg-[--color-lightBlue] px-1"
          onClick={handleSignIn}
        >
          Sign in
        </button>
      </IfNotAuthenticated>
    </div>
  )
}

export default SignInButton
