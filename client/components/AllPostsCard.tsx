import { Post } from '../../models/all-posts'

interface Props {
  post: Post
}

export default function PostCard({ post }: Props) {
  return (
    <div className="flex h-48 flex-col overflow-hidden rounded-xl border-2 border-[#c1121f] bg-[white] p-3 shadow-lg shadow-gray-400">
      <div className="mb-2 flex items-center gap-3">
        {post.authorImg && (
          <img
            src={post.authorImg}
            alt={post.authorName}
            className="h-10 w-10 rounded-full border border-gray-700"
          />
        )}

        <h2 className="text-lg font-semibold text-[#003049]">
          {post.authorName || 'Unknown User'}
        </h2>
      </div>
      <p className="flex-1 text-black">{post.text}</p>
      <p className="mt-2 text-sm text-gray-600">
        {new Date(post.created_at).toLocaleString()}
      </p>
    </div>
  )
}
