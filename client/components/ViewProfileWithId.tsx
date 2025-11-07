import ViewProfileDetail from './ViewProfileDetail'
import { useParams } from 'react-router'

interface Props {
  id?: number
}

export default function ViewProfileWithId({ id }: Props) {
  const { id: paramId } = useParams()

  if (!paramId && !id) {
    return <p>Something went wrong</p>
  }

  console.log(id, paramId)

  return (
    <>
      <ViewProfileDetail id={id ? id : Number(paramId)} />
    </>
  )
}
