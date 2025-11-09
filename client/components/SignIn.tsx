import { useEffect } from 'react' // ✅ Add this
import { useNavigate } from 'react-router'
import { useMockAuth } from '../hooks/useMockAuth'
import { useGetAllUsers } from '../hooks/useUser'

function SignIn() {
  const authData = useMockAuth() // ✅ mock auth
  const userQuery = useGetAllUsers()
  const navigate = useNavigate()

  // Optional: redirect logic can remain
  useEffect(() => {
    if (authData.isAuthenticated && userQuery.data) {
      const users = userQuery.data
      const userAuthId = users.map((user) => user.authId)
      if (!userAuthId.includes(authData.user?.sub)) {
        navigate('/signUp')
      }
    }
  }, [authData.isAuthenticated, userQuery.data, navigate])

  if (userQuery.isError) return <p>Error loading profiles</p>
  if (userQuery.isPending || !userQuery.data) return <p>loading...</p>

  return (
    <div className="flex flex-col items-center">
      <div className="my-20 flex w-9/12 flex-col items-center rounded-md bg-[#fdf4e0] p-5 shadow-lg shadow-gray-300">
        <h1 className="text-4xl font-bold">
          Welcome back, <span className="font-extrabold">{authData.user?.nickname}</span>
        </h1>
        <p className="text-xl my-3">
          LoopedIn is a modern social media platform built to keep you truly LoopedIn with your friends.
        </p>
        <button
          onClick={() => navigate('/profiles')}
          className="rounded-2xl border-2 border-black px-2 text-xl font-semibold shadow-md shadow-gray-400 hover:bg-gray-900 hover:text-[#fdf4e0]"
        >
          Explore Now
        </button>
      </div>
    </div>
  )
}

export default SignIn
