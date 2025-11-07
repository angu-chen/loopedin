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

export default function CreateGroupModal({ open, createGroup, onClose }) {
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
    resetClose()
  }

  const resetClose = () => {
    setGroup(emptyGroup)
    onClose()
  }
  const handleChange = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newGroup = { ...group, [key]: e.target.value }
    setGroup(newGroup)
  }

  if (!open) {
    return null
  }
  return (
    // className="flex items-center justify-center"
    <>
      <div className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-[rgba(0,0,0,0.7)]"></div>
      <div className="relative left-1/2 top-1/2 z-10 h-auto w-2/5 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-[#fdf4e0] p-5 shadow-lg shadow-gray-300">
        <div className="absolute right-2 top-1">
          <button className="hover:font-bold" onClick={resetClose}>
            X
          </button>
        </div>
        <h1 className="text-2xl"> Create your Group</h1>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => handleChange('name', e)}
              type="text"
              id="name"
              name="name"
              value={group.name}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              onChange={(e) => handleChange('description', e)}
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
          <div className="flex gap-3">
            <div>
              <button
                onClick={resetClose}
                className=" rounded-2xl border border-black px-2  shadow-md shadow-gray-400 hover:bg-gray-900 hover:text-[#fdf4e0]"
              >
                Cancel
              </button>
            </div>
            <div>
              <button
                className=" rounded-2xl border border-black px-2  shadow-md shadow-gray-400 hover:bg-gray-900 hover:text-[#fdf4e0]"
                type="submit"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
