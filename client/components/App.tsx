import { useFruits } from '../hooks/useFruits.ts'
import SignInButton from './SingInButton.tsx'

function App() {
  const { data } = useFruits()

  return (
    <>
      <div className="app">
        <SignInButton />
        <h1 className="text-3xl font-bold underline">
          Fullstack Boilerplate - LoopedIn
        </h1>
      </div>
    </>
  )
}

export default App
