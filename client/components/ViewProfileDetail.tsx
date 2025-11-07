import { useGetUserByAuthId } from '../hooks/useUser'

interface Props {
  authId: string
}

export default function ViewProfileDetail({ authId }: Props) {
  const { data: user, isError, isPending } = useGetUserByAuthId(authId)

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
    <>
      <div>
        <img
          src={user.coverImg ? user.coverImg : '/img/cover/placeholder.jpg'}
          alt={`Cover chosen by ${user.fullname}`}
        />
        <img
          src={user.img ? user.img : '/img/users/placeholder-img.svg'}
          alt={`Avatar for ${user.fullname}`}
        />
        <button id="edit" onClick={handleClick}>
          Edit profile
        </button>
      </div>
      <div>
        {user.fullname ||
          (user.username && (
            <h2>{user.fullname ? user.fullname : user.username}</h2>
          ))}
        <h2>Intro</h2>
        {user.location && <p>{user.location}</p>}
        <p>{user.fullname}</p>
        {user.bio && <p>{user.bio}</p>}
      </div>
      <div>
        <h2>Groups</h2>
      </div>
      <div>
        <h2>Posts</h2>
      </div>
    </>
  )
}
