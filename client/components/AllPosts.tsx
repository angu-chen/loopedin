import { useQuery } from '@tanstack/react-query'
import { getAllPosts } from '../apis/all-posts'
import { Post } from '../../models/all-posts'
import PostCard from './AllPostsCard'

export default function AllPosts() {
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getAllPosts,
  })

  if (isLoading) return <p>Loading Posts...</p>
  if (isError) return <p>Failed to load posts</p>

  return (
    <div className="min-h-screen bg-[#fdf0d5] px-8 py-10 text-center">
      <h2 className="mb-6 text-3xl font-bold text-[#003049]">HomeFeed</h2>

      <div className="flex flex-col items-center gap-6">
        {posts?.map((post: Post) => (
          // eslint-disable-next-line react/jsx-key
          <div className="mx-auto w-full max-w-3xl">
            <PostCard key={post.id} post={post} />
          </div>
        ))}
      </div>
    </div>
  )
}
