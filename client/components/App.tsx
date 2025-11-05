import SignInButton from './SingInButton.tsx'
import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <div className="app">
        <header>
          <SignInButton />
          <h1 className="text-3xl font-bold underline">LoopedIn</h1>
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
