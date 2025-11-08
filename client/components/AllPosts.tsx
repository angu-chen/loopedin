import { Post, PostData } from '../../models/all-posts'
import PostCard from './AllPostsCard'
import Button from './Button'
import { usePosts } from '../hooks/usePosts'
import CreatePostForm from './CreatePostForm'
import { useState } from 'react'

export default function AllPosts() {
  const { data: posts, isLoading, isError, addPost } = usePosts()
  const [formVisible, setFormVisible] = useState(false)

  if (isLoading) return <p>Loading Posts...</p>
  if (isError) return <p>Failed to load posts</p>

  const handleClick = () => {
    setFormVisible(formVisible ? false : true)
  }

  const handleAddNewPost = (newPost: PostData) => {
    addPost.mutate(newPost)
  }

  return (
    <div className="min-h-screen bg-[#fdf0d5] px-8 py-10 text-center">
      <h2 className="mb-6 text-3xl font-bold text-[#003049]">HomeFeed</h2>
      <Button text="Add post" handleClick={handleClick} />
      <div className="flex flex-col items-center gap-6">
        {posts?.map((post: Post) => (
          // eslint-disable-next-line react/jsx-key
          <div className="mx-auto w-full max-w-3xl">
            <PostCard key={post.id} post={post} />
          </div>
        ))}
      </div>
      {formVisible && (
        <CreatePostForm userId={1} submitForm={handleAddNewPost} />
      )}
    </div>
  )
}
