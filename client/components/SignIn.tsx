import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import SignUpForm from './SignUpForm'
import { useUser } from '../hooks/useUser'
import { useEffect } from 'react'
import { User } from '../../models/user'
import { useNavigate } from 'react-router'

function SignIn() {
  const authData = useAuth0()

  const userQuery = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (authData.isAuthenticated && userQuery.data) {
      const users: User[] = userQuery.data
      const userAuthId = users.map((user) => user.authId)
      console.log('is authenticated', authData.isAuthenticated)
      console.log('using effects, Auth ids are ', userAuthId)

      if (userAuthId.includes(authData.user?.sub)) {
        console.log('user is not new')
      } else {
        console.log('user is new')
        navigate('/signUp')
      }
    }
  })

  if (userQuery.isError) {
    console.log('Error loading profiles')
  }

  if (userQuery.isPending || !userQuery.data) {
    console.log('loading....')
    return <p>loading...</p>
  }

  const handleSignIn = () => {
    authData.loginWithPopup()
  }

  return (
    <div className="flex flex-col items-center">
      <IfNotAuthenticated>
        <div className="my-20 flex w-9/12 flex-col items-center rounded-md bg-[#fdf4e0] p-5 shadow-lg shadow-gray-300 ">
          <div className="m-3">
            <h1 className="text-4xl font-bold">
              {' '}
              Welcome to{' '}
              <span className=" font-extrabold italic tracking-wide text-[#780000] sm:text-3xl md:text-4xl lg:text-6xl">
                LoopedIn
              </span>
            </h1>
          </div>
          <div className="m-3">
            <p className="text-xl">
              LoopedIn is a modern social media platform built to keep you truly{' '}
              <span className="font-extrabold italic tracking-wide text-[#780000]">
                LoopedIn{' '}
              </span>{' '}
              with your friends. Form your own interest-based groups where you
              can connect, share and grow together.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="my-4 text-xl font-bold">Join today.</p>
            <button
              onClick={handleSignIn}
              className="rounded-2xl border-2 border-black px-2 text-xl font-semibold shadow-md shadow-gray-400 hover:bg-gray-900 hover:text-[#fdf4e0] "
            >
              {' '}
              Get Started
            </button>
          </div>
        </div>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <div className="my-20 flex w-9/12 flex-col items-center rounded-md bg-[#fdf4e0] p-5 shadow-lg shadow-gray-300 ">
          <div className="m-3">
            <h1 className="text-4xl font-bold">
              {' '}
              Welcome back to{' '}
              <span className=" font-extrabold italic tracking-wide text-[#780000] sm:text-3xl md:text-4xl lg:text-6xl">
                LoopedIn
              </span>
            </h1>
          </div>
          <div className="m-3">
            <p className="text-xl">
              LoopedIn is a modern social media platform built to keep you truly{' '}
              <span className="font-extrabold italic tracking-wide text-[#780000]">
                LoopedIn{' '}
              </span>{' '}
              with your friends. Form your own interest-based groups where you
              can connect, share and grow together.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <button className="rounded-2xl border-2 border-black px-2 text-xl font-semibold shadow-md shadow-gray-400 hover:bg-gray-900 hover:text-[#fdf4e0] ">
              {' '}
              Explore Now
            </button>
          </div>
        </div>
      </IfAuthenticated>
    </div>
  )
}
export default SignIn
