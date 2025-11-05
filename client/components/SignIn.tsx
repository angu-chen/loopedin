import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import SignUpForm from './SignUpForm'

function SignIn() {
  const authData = useAuth0()

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
        <SignUpForm />
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
