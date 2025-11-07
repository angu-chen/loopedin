import { useGetUserByLoopId } from '../hooks/useUser'

interface Props {
  id: number
}

export default function ViewProfileDetail({ id }: Props) {
  const { data: user, isError, isPending } = useGetUserByLoopId(id)

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
          <button
            id="edit"
            onClick={handleClick}
            className="absolute right-36 top-auto rounded-3xl border-2 border-blue-950 p-4 text-xl font-semibold shadow-md shadow-blue-950 hover:bg-blue-300"
          >
            Edit profile
          </button>
        </div>
        <div className="pl-20">
          <h2 className="text-4xl font-semibold">
            {user.fullname ||
              (user.username && (
                <h2>{user.fullname ? user.fullname : user.username}</h2>
              ))}
          </h2>
        </div>
      </div>
      <div className="border-t-2 border-blue-950">
        <div className="p-10">
          {user.location && <p className="text-2xl"> {user.location}</p>}
          {user.bio && <p className="py-5 text-xl">{user.bio}</p>}
        </div>
        <div className="p-10">
          <h2>Groups</h2>
        </div>
        <div className="p-10">
          <h2>Posts</h2>
        </div>
      </div>
    </div>
  )
}
