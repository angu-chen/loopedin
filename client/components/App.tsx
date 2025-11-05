import { Outlet } from 'react-router'

function App() {
  return (
    <div className="app">
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}

export default App
