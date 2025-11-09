import { Post, PostData } from '../../models/all-posts'
import PostCard from './AllPostsCard'
import { usePosts } from '../hooks/usePosts'
import CreatePostForm from './CreatePostForm'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import SignIn from './SignIn'

export default function AllPosts() {
  const { data: posts, isLoading, isError, addPost } = usePosts()
  const { getAccessTokenSilently, user } = useAuth0()

  if (isLoading) return <p>Loading Posts...</p>
  if (isError) return <p>Failed to load posts</p>

  const handleAddNewPost = async (postData: PostData) => {
    const token = await getAccessTokenSilently()
    addPost.mutate({ newPost: postData, token: token })
  }

  console.log(user?.sub)

  const postsNewestFirst = posts?.reverse()

  return (
    <div className="min-h-screen bg-[#fdf0d5] px-8 py-10 text-center">
      <IfAuthenticated>
        <h2 className="mb-6 text-3xl font-bold text-[#003049]">HomeFeed</h2>
        <div className="flex flex-col items-center gap-6">
          {user && user.sub && (
            <CreatePostForm authId={user.sub} submitForm={handleAddNewPost} />
          )}

          {postsNewestFirst?.map((post: Post) => (
            <div key={post.id} className="mx-auto w-full max-w-3xl">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <SignIn />
      </IfNotAuthenticated>
    </div>
  )
}
