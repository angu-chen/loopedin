import { useGetUserWithPostsAndGroups } from '../hooks/useUser'
import PostCard from './AllPostsCard'
import GroupCard from './GroupCard'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
  id: number
}

export default function ViewProfileDetail({ id }: Props) {
  const { data: user, isError, isPending } = useGetUserWithPostsAndGroups(id)
  const { user: auth0user } = useAuth0()

  if (isError) {
    return <p>Error retrieving profile</p>
  }

  if (isPending || !user) {
    return <p>Loading...</p>
  }

  const handleClick = () => {}

  const posts = user.posts
  const groups = user.groups

  return (
    <div className="p-10">
      <div>
        <img
          className="h-48 w-full rounded-lg border-2 border-blue-950 "
          src={user.coverImg ? user.coverImg : '/img/cover/placeholder.jpg'}
          alt={`Cover chosen by ${user.fullname}`}
        />
        <img
          className="-ml-18 absolute left-36 top-80 -m-16 max-h-[230px] rounded-full border border-blue-950 align-middle lg:-ml-16 dark:border-gray-800 dark:shadow-xl"
          src={user.img ? user.img : '/img/users/placeholder-img.svg'}
          alt={`Avatar for ${user.fullname}`}
        />
        <div className="p-10 text-right ">
          {/* //TODO - edit user form */}
          {user.authId && auth0user && auth0user.sub === user.authId && (
            <button
              id="edit"
              onClick={handleClick}
              className="absolute right-36 top-auto rounded-3xl border-2 border-blue-950 p-4 text-xl font-semibold shadow-md shadow-blue-950 hover:bg-blue-300"
            >
              Edit profile
            </button>
          )}
        </div>
        <div className="pl-20">
          <h2 className="pb-2 text-4xl font-semibold">
            {user.fullname ||
              (user.username && (
                <h2>{user.fullname ? user.fullname : user.username}</h2>
              ))}
          </h2>
        </div>
      </div>

      <div className="border-t-2 border-blue-950">
        <div className="px-10 py-5">
          {user.location && <p className="text-2xl"> {user.location}</p>}
          {user.bio && <p className="py-5 text-xl">{user.bio}</p>}
        </div>
        <div className="flex flex-auto flex-row">
          <div className="max-w-2xl p-10 text-center">
            <h2 className=" p-4 text-2xl font-bold">Groups</h2>
            {!groups[0] && (
              <p className="text-xl">Not currently a member of any groups</p>
            )}
            {groups[0] &&
              groups.map((group) => (
                <GroupCard group={group} key={group.name} />
              ))}
          </div>
          <div className="grow p-10 text-center">
            <h2 className="p-4 text-2xl font-bold">Posts</h2>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
