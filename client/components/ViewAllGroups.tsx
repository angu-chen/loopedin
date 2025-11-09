import { useNavigate } from 'react-router-dom'
import { useGroup } from '../hooks/useGroup'
import GroupCard from './GroupCard'

export default function ViewAllGroups() {
  const navigate = useNavigate()

  // Toggle this to true to use mock groups
  const useMockData = false

  const groupQuery = useGroup(useMockData)

  if (groupQuery.isError) return <p>Error loading groups</p>
  if (groupQuery.isLoading || !groupQuery.data) return <p>Loading...</p>

  const groups = groupQuery.data

  return (
    <div className="mx-10 my-10 sm:mx-20 sm:my-20">
      <h1 className="text-2xl font-bold mb-5">All Groups</h1>

      <div className="grid gap-4">
        {groups.map((group) => (
          <div
            key={group.id}
            className="cursor-pointer"
            onClick={() => navigate(`/group/${group.id}`)}
          >
            <GroupCard group={group} />
            <p className="mt-1 text-sm text-gray-600">
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
