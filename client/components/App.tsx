import SignInButton from './SingInButton.tsx'
import Navbar from './Navbar.tsx'
import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#fdf0d5]">
        <header>
          <SignInButton />
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  )
}

export default App
