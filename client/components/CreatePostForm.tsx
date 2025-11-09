import { useState } from 'react'
import { PostData } from '../../models/all-posts'

interface Props {
  authId: string
  submitForm: (newPost: PostData) => void
}

export default function CreatePostForm({ submitForm, authId }: Props) {
  const [formData, setFormData] = useState<PostData>({
    authId: authId,
    text: '',
    created_at: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, text: event.currentTarget.value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const submitDate = new Date(Date.now()).toISOString()
    setFormData({ ...formData, text: '' })
    submitForm({ ...formData, created_at: submitDate })
  }

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <label htmlFor="new-post-text" className="pr-3 text-xl">
        What would you like to say? &nbsp;
        <input
          onChange={handleChange}
          type="text"
          value={formData.text}
          id="new-post-text"
          name="new-post-text"
          className="border border-blue-950 p-1 text-xl"
        />
      </label>
      <button className="rounded-xl border-2 border-blue-950 p-1 text-lg font-semibold hover:bg-black hover:text-white">
        Add post
      </button>
    </form>
  )
}
