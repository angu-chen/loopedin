import { useState } from 'react'
import { useUserMutation } from '../hooks/useUser'
import { addNewUser } from '../apis/user'
import { useAuth0 } from '@auth0/auth0-react'

function SignUpForm() {
  const [user, setUser] = useState({
    authId: '',
    username: '',
    fullname: '',
    location: '',
    img: '',
  })

  const authData = useAuth0()

  const createNewUser = useUserMutation(addNewUser)

  const handleChange = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newusername = { ...user, [key]: e.target.value }
    setUser(newusername)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createNewUser.mutate({ ...user, authId: authData.user?.sub ?? 'n/a' })
  }

  return (
    <div>
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
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
