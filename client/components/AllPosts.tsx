import { Post, PostData } from '../../models/all-posts'
import PostCard from './AllPostsCard'
import { usePosts } from '../hooks/usePosts'
import CreatePostForm from './CreatePostForm'
import { useAuth0 } from '@auth0/auth0-react'

export default function AllPosts() {
  const { data: posts, isLoading, isError, addPost } = usePosts()
  const { getAccessTokenSilently } = useAuth0()

  if (isLoading) return <p>Loading Posts...</p>
  if (isError) return <p>Failed to load posts</p>

  const handleAddNewPost = async (newPost: PostData) => {
    const token = await getAccessTokenSilently()
    console.log(token)
    addPost.mutate({ newPost, token: token })
  }

  return (
    <div className="min-h-screen bg-[#fdf0d5] px-8 py-10 text-center">
      <h2 className="mb-6 text-3xl font-bold text-[#003049]">HomeFeed</h2>
      <div className="flex flex-col items-center gap-6">
        <CreatePostForm userId={1} submitForm={handleAddNewPost} />
        {posts?.map((post: Post) => (
          <div key={post.id} className="mx-auto w-full max-w-3xl">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  )
}
