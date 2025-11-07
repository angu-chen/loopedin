import ViewProfileDetail from './ViewProfileDetail'
import { useParams } from 'react-router'

export default function ViewProfileWithId() {
  const { id } = useParams()

  if (!id) {
    return <p>Something went wrong</p>
  }

  return (
    <>
      <ViewProfileDetail id={Number(id)} />
    </>
  )
}
