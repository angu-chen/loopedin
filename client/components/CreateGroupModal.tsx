import React, { useState } from 'react'
import { GroupData } from '../../models/group'

const emptyGroup: GroupData = {
  name: '',
  description: '',
  createdByUserId: null,
}

export default function CreateGroupModal() {
  const [group, setGroup] = useState(emptyGroup)
  const [missingContent, setMissingContent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (group.name.length === 0 || group.description.length === 0) {
      setMissingContent(true)
    }
  }
  const handleChange = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newGroup = { ...group, [key]: e.target.value.trim() }
    setGroup(newGroup)
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => handleChange('username', e)}
              type="text"
              id="name"
              name="name"
              value={group.name}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              onChange={(e) => handleChange('username', e)}
              type="text"
              id="description"
              name="description"
              value={group.name}
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
