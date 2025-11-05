import { useState } from 'react'

interface UserData {
  authId: string
  username: string
  fullname: string
  location: string
  img: string
}

function SignUpForm() {
  const [username, setUsername] = useState({
    authID: '',
    username: '',
    fullname: '',
    location: '',
    img: '',
  })

  const handleChange = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newusername = { ...username, [key]: e.target.value }
    setUsername(newusername)
  }

  return (
    <div>
      <form className="flex flex-col gap-2">
        <div>
          <label className="mx-2" htmlFor="username">
            Username
          </label>
          <input
            onChange={(e) => handleChange('username', e)}
            type="text"
            id="username"
            name="username"
            value={username.username}
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
            value={username.fullname}
          />
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
