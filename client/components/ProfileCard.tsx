import type { User } from '../../models/user'

interface Props {
  user: User
}

export default function ProfileCard({ user }: Props) {
  return (
    <div className="group relative mx-auto mb-6 mt-20 w-full min-w-0 max-w-md break-words rounded-xl border bg-white shadow-2xl md:max-w-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="rounded-xl border border-solid border-blue-400 bg-blue-100 pb-6">
        <div className="flex flex-wrap justify-center">
          <div className="flex w-full justify-center">
            <div className="relative">
              <img
                //Todo: add user images for seeds
                src={user.img ? user.img : '/img/users/placeholder-img.svg'}
                alt={`Avatar of ${user.fullname ? user.fullname : ''}`}
                className="-ml-18 absolute -m-16 max-w-[150px] rounded-full border-8 border-white align-middle lg:-ml-16 dark:border-gray-800 dark:shadow-xl"
              />
            </div>
          </div>
        </div>
        <div className="mt-20 text-center">
          <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">
            {user.fullname ? user.fullname : ''}
          </h3>
          <div className="mx-auto flex w-full flex-row justify-center space-x-2 text-center">
            <div className="font-mono text-xl font-bold tracking-wide text-gray-600 dark:text-gray-300">
              {user.username ? user.username : ''} /{' '}
              {user.location ? user.location : ''}
            </div>
          </div>
        </div>
        {/* TODO - add bio to profile? */}
        <div className="mx-6 mt-6 border-t border-gray-200 pt-6 text-center dark:border-gray-700/50">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-6">
              <p className="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                turpis orci.
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-6 translate-y-6 overflow-hidden rounded-b-xl">
          <div className="absolute flex -space-x-12 rounded-b-2xl">
            <div className="z-10 h-8 w-36 skew-x-[35deg] transform bg-blue-500/90 transition-colors delay-75 duration-200 group-hover:bg-blue-950/90"></div>
            <div className="z-20 h-8 w-28 skew-x-[35deg] transform bg-blue-400/90 transition-colors delay-100 duration-200 group-hover:bg-blue-900/90"></div>
            <div className="z-30 h-8 w-28 skew-x-[35deg] transform bg-blue-300/90 transition-colors delay-150 duration-200 group-hover:bg-blue-600/90"></div>
            <div className="z-40 h-8 w-28 skew-x-[35deg] transform bg-blue-200/90 transition-colors delay-200 duration-200 group-hover:bg-blue-400/90"></div>
            <div className="z-50 h-8 w-28 skew-x-[35deg] transform bg-blue-100/90 transition-colors delay-300 duration-200 group-hover:bg-blue-200/90"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
