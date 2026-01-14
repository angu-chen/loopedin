import { useState } from 'react'
import { useAddUserMutation, useUserMutation } from '../hooks/useUser'
import { addNewUser } from '../apis/user'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router'
import { QueryClient, useQueryClient } from '@tanstack/react-query'

function SignUpForm() {
  const [user, setUser] = useState({
    authId: '',
    username: '',
    fullname: '',
    location: '',
    img: '/img/users/placeholder-img.svg',
  })

  const [missingContent, setMissingContent] = useState(false)

  const navigate = useNavigate()

  const authData = useAuth0()

  // const createNewUser = useUserMutation(addNewUser)
  const createNewUser = useAddUserMutation()

  const handleChange = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newusername = { ...user, [key]: e.target.value.trim() }
    setUser(newusername)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (
      user.fullname.length === 0 ||
      user.username.length === 0 ||
      user.location.length === 0
    ) {
      setMissingContent(true)
    } else {
      console.log('adding new user')
      createNewUser.mutate(
        { ...user, authId: authData.user?.sub ?? 'n/a' },
        {
          onSuccess: () => {
            navigate('/profiles')
          },
        },
      )
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="my-20 flex w-9/12 flex-col items-center rounded-md bg-[#fdf4e0] p-5 shadow-lg shadow-gray-300 ">
        <p className="m-3 text-xl font-semibold">
          Finish creating your account
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div>
            <label className="mx-2" htmlFor="username">
              Username
            </label>
            <input
              onChange={(e) => handleChange('username', e)}
              type="text"
              id="username"
              name="username"
              value={user.username}
              className="border focus:outline-none focus:ring-2 focus:ring-[--color-lightBlue]"
            />
          </div>
          <div>
            <label className="mx-2" htmlFor="fullname">
              Fullname
            </label>
            <input
              onChange={(e) => handleChange('fullname', e)}
              type="text"
              id="fullname"
              name="fullname"
              value={user.fullname}
              className="border focus:outline-none focus:ring-2 focus:ring-[--color-lightBlue]"
            />
          </div>
          <div>
            <label className="mx-2" htmlFor="location">
              Location (city, Country)
            </label>
            <input
              onChange={(e) => handleChange('location', e)}
              type="text"
              id="location"
              name="location"
              value={user.location}
              className="border focus:outline-none focus:ring-2 focus:ring-[--color-lightBlue]"
            />
          </div>
          {missingContent ? (
            <p className="text-sm text-[--color-darkRed]">
              All contents have to be filled
            </p>
          ) : (
            <p></p>
          )}
          <div className="self-center rounded-2xl border border-black px-2  shadow-md shadow-gray-400 hover:bg-gray-900 hover:text-[#fdf4e0]">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpForm
