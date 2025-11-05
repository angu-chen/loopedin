import { useState } from 'react'

function SignUpForm() {
  const [username, setUsername] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newusername = e.target.value
    setUsername(newusername)
  }

  return (
    <div>
      <form>
        <div>
          <label className="mx-2" htmlFor="username">
            Username
          </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            id="username"
            name="username"
            value={username}
          />
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
