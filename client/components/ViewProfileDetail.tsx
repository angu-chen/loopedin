// import { useGroup } from '../hooks/useGroup'
import { useGetUserByLoopId } from '../hooks/useUser'
import GroupCard from './GroupCard'

interface Props {
  id: number
}

export default function ViewProfileDetail({ id }: Props) {
  const { data: user, isError, isPending } = useGetUserByLoopId(id)

  const groups = [
    {
      id: 1,
      name: 'LoopedIn Developers',
      description:
        'A community for coders, builders, and tech enthusiasts to share projects, troubleshoot code, and stay ahead of the curve.',
      createdByUserId: 1,
    },
    {
      id: 2,
      name: 'Creative Designers',
      description:
        'Where imagination meets design. Connect with artists, UI/UX pros, and creative minds to inspire and be inspired.',
      createdByUserId: 4,
    },
  ]

  const posts = [
    {
      id: 1,
      user_id: 1,
      text: 'Excited to finally join LoopedIn! Can’t wait to connect with other devs 🚀',
      created_at: '2025-10-30T08:15:00Z',
    },
    {
      id: 2,
      user_id: 2,
      text: 'Redesigning my portfolio — less clutter, more clarity ✨ #designlife',
      created_at: '2025-10-31T10:45:00Z',
    },
  ]

  if (isError) {
    return <p>Error retrieving profile</p>
  }

  if (isPending || !user) {
    return <p>Loading...</p>
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.id
  }

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
          {/* //TODO - edit user functionality */}
          <button
            id="edit"
            onClick={handleClick}
            className="absolute right-36 top-auto rounded-3xl border-2 border-blue-950 p-4 text-xl font-semibold shadow-md shadow-blue-950 hover:bg-blue-300"
          >
            Edit profile
          </button>
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
            {groups.map((group) => (
              <GroupCard group={group} key={group.name} />
            ))}
          </div>
          <div className="grow p-10 text-center">
            <h2 className="p-4 text-2xl font-bold">Posts</h2>
            {posts.map((post) => (
              <div
                key={post.id}
                className="mb-6 rounded-xl border-2 border-gray-800 p-6 shadow-lg shadow-gray-400"
              >
                <p className="text-xl">{post.text}</p>
                <p>{post.created_at}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
