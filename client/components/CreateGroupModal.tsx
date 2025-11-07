import React, { useEffect, useState } from 'react'
import { GroupData } from '../../models/group'
import { useUser } from '../hooks/useUser'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'

const emptyGroup: GroupData = {
  name: '',
  description: '',
  createdByUserId: null,
}

export default function CreateGroupModal({ createGroup }) {
  const [group, setGroup] = useState(emptyGroup)
  const [missingContent, setMissingContent] = useState(false)
  const [userId, setUserId] = useState(0)
  const { user: auth0user } = useAuth0()
  const currentAuthId = auth0user && auth0user.sub ? auth0user.sub : null

  const userQuery = useUser()

  useEffect(() => {
    if (userQuery.isSuccess) {
      const myUser = userQuery.data.filter((user) => {
        if (user.authId === currentAuthId) {
          return user
        }
      })
      const id = Number(myUser[0].id)
      setUserId(id)
    }
  }, [userQuery.isSuccess, userQuery.data, currentAuthId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (group.name.length === 0 || group.description.length === 0) {
      setMissingContent(true)
    }
    createGroup({ ...group, createdByUserId: userId })
  }
  const handleChange = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newGroup = { ...group, [key]: e.target.value }
    setGroup(newGroup)
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => handleChange('name', e)}
              type="text"
              id="name"
              name="name"
              value={group.name}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              onChange={(e) => handleChange('description', e)}
              type="text"
              id="description"
              name="description"
              value={group.description}
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
    </>
  )
}
