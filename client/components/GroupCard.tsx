import { Group } from '../../models/group'

export default function GroupCard(group: Group) {
  return (
    <div>
      <h1>{group.name}</h1>
    </div>
  )
}
