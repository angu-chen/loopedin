import { useGroup } from '../hooks/useGroup'
import type { Group } from '../../models/group'

import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import GroupCard from './GroupCard'

const fakeGroup = {
  id: 3,
  name: 'Asia Tech Circle',
  description:
    'Join tech innovators and entrepreneurs across Asia discussing trends, startups, and the future of digital innovation.',
  createdByUserId: 3,
}

export default function ViewAllGroups() {
  const authData = useAuth0()

  const groupQuery = useGroup()

  if (groupQuery.isError) {
    return <p>Error loading groups</p>
  }

  if (groupQuery.isPending || !groupQuery.data) {
    return <p> Loading....</p>
  }

  const groups: Group[] = groupQuery.data

  const handleSignIn = () => {
    authData.loginWithPopup()
  }
  return (
    <div className="mx-10 my-10 sm:mx-20 sm:my-20">
      <IfNotAuthenticated>
        <div className="my-20 flex flex-col rounded-md bg-[#fdf4e0] p-5 shadow-lg shadow-gray-300 ">
          <div>
            <h1 className="font-bold italic sm:text-lg md:text-2xl lg:text-4xl">
              <span className=" font-extrabold italic tracking-wide text-[#780000] sm:text-lg md:text-2xl lg:text-4xl">
                LoopedIn
              </span>{' '}
              Groups
            </h1>
          </div>
          <div className="my-3">
            <p>
              Log in to connect with friends, explore trending topics, and
              discover amazing groups that match your interests. Join
              conversations, share your passions, and see what’s happening in
              your community — all in one place.{' '}
            </p>
          </div>
          <div className="my-5 self-center">
            <button
              onClick={handleSignIn}
              className="rounded-2xl border-2 border-black px-2 text-lg font-semibold shadow-md shadow-gray-400 hover:bg-gray-900 hover:text-[#fdf4e0] "
            >
              {' '}
              Get Started
            </button>
          </div>
        </div>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <div className="my-10 flex w-full justify-between ">
          <div>
            <h1 className="font-bold italic sm:text-2xl md:text-4xl lg:text-6xl">
              <span className=" font-extrabold italic tracking-wide text-[#780000] sm:text-2xl md:text-4xl lg:text-6xl">
                LoopedIn
              </span>{' '}
              Groups
            </h1>
          </div>
          <div className="self-end">
            <button className=" rounded-2xl border-2 border-black px-2 text-lg font-semibold shadow-md shadow-gray-400 hover:bg-gray-900 hover:text-[#fdf4e0] ">
              {' '}
              Create Group
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {groups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      </IfAuthenticated>
    </div>
  )
}
