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
    <div>
      <IfAuthenticated>
        {user && <p>Signed in as: {user?.nickname}</p>}
        <button onClick={handleSignOut}>Sign out</button>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button className="bg-slate-500" onClick={handleSignIn}>
          Sign in
        </button>
      </IfNotAuthenticated>
    </div>
  )
}

export default SignInButton
