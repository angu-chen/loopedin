import { FC } from 'react'
import { Link } from 'react-router'
import '../styles/main.css'
import { User } from 'lucide-react'

const Navbar: FC = () => {
  return (
    <nav className="flex w-full flex-col bg-[#fdf0d5] ">
      {/* Blue Bar*/}
      <div className="mt-2 h-16 w-full rounded-md bg-[#003049] "></div>

      {/* Bottom sectoin: logo and nav links */}
      <div className="mt-2 flex w-full items-center justify-between border-b-2 border-black px-8 py-4 pb-6">
        {/* LoopedIn logo*/}
        <div className="text-6xl font-extrabold italic tracking-wide text-[#780000]">
          LoopedIn
        </div>

        {/* Right Nav links */}
        <div className="text-ls flex items-center gap-8 font-medium text-[#000]">
          <Link
            to="/"
            className="relative text-black transition duration-200 before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:bg-[#c1121f] before:transition-all before:duration-300 hover:text-[#c1121f] hover:before:w-full"
          >
            Home
          </Link>
          <Link
            to="/"
            className="relative text-black transition duration-200 before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:bg-[#c1121f] before:transition-all before:duration-300 hover:text-[#c1121f] hover:before:w-full"
          >
            Groups
          </Link>
          <Link
            to="/profiles"
            className="relative text-black transition duration-200 before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:bg-[#c1121f] before:transition-all before:duration-300 hover:text-[#c1121f] hover:before:w-full"
          >
            View Profiles
          </Link>
          <Link
            to="/"
            className="relative text-black transition duration-200 before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:bg-[#c1121f] before:transition-all before:duration-300 hover:text-[#c1121f] hover:before:w-full"
          >
            News
          </Link>
          <Link
            to="/weather"
            className="relative text-black transition duration-200 before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:bg-[#c1121f] before:transition-all before:duration-300 hover:text-[#c1121f] hover:before:w-full"
          >
            Weather
          </Link>

          {/* Profile Icon */}
          <Link to="/profile">
            <User className="h-6 w-6 text-gray-900 hover:text-[#800000]" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
