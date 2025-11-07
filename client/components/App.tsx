import Navbar from './Navbar.tsx'
import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#fdf0d5]">
        <header>
          <Navbar />
        </header>
        <main className="pt-44">
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  )
}

export default App
