import { useState } from 'react'
import { PostData } from '../../models/all-posts'

interface Props {
  userId: number
  submitForm: (newPost: PostData) => void
}

export default function CreatePostForm({ submitForm, userId }: Props) {
  const [formData, setFormData] = useState<PostData>({
    user_id: userId,
    text: '',
    created_at: 'string',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, text: event.currentTarget.value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const submitDate = new Date(Date.now()).toLocaleString()
    submitForm({ ...formData, created_at: submitDate })
  }

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <label htmlFor="text">
        Enter your text here:
        <input
          onChange={handleChange}
          type="text"
          value={formData.text}
          id="text"
          name="text"
        />
      </label>
      <button>Add your post</button>
    </form>
  )
}
