/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import request from 'superagent'

interface Props {
  id: number
  existingBio?: string
  onClose: () => void
  onUpdate: () => void
}

export default function EditProfileForm({
  id,
  existingBio,
  onClose,
  onUpdate,
}: Props) {
  const [bio, setBio] = useState(existingBio || '')
  const [img, setImg] = useState<File | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const formData = new FormData()
    //Add bio text to form data
    formData.append('bio', bio)
    if (img) formData.append('img', img)

    //Start building the PUT request
    const requestBuilder = request.put(`/api/v1/user/${id}`)

    for (const [key, value] of formData.entries()) {
      if (key === 'img' && value instanceof File) {
        requestBuilder.attach('img', value as any)
      } else {
        requestBuilder.field(key, value as string)
      }
    }

    await requestBuilder.catch((err) => console.error(err))

    onUpdate()
    onClose()
  }

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-4 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bio" className="mb-2 block">
          Bio:
        </label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full rounded border p-2"
        />
        <label htmlFor="profile image" className="mb-2 mt-4 block">
          Profile Image:
        </label>
        <input
          type="file"
          onChange={(e) => setImg(e.target.files?.[0] || null)}
          className="mb-4"
        />
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onClose}
          className="ml-2 rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-500"
        >
          Cancel
        </button>
      </form>
    </div>
  )
}
