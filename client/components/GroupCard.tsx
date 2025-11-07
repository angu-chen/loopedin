import { Group } from '../../models/group'

interface Props {
  group: Group
}

export default function GroupCard(props: Props) {
  return (
    <div className=" flex h-48 flex-col overflow-hidden rounded-xl border-2 border-gray-800 p-3 shadow-lg shadow-gray-400">
      <div className="mb-3 flex items-center">
        <div className=" h-20 w-20 rounded-xl border-2 border-gray-800 bg-white shadow-md shadow-gray-400">
          <img
            className="object-cover"
            src="/img/group.svg"
            alt="default group img"
          />
        </div>
        <h1 className=" mx-10 font-semibold  sm:text-lg md:text-2xl lg:text-4xl">
          {props.group.name}
        </h1>
      </div>
      <div>
        <p>{props.group.description}</p>
      </div>
    </div>
  )
}
