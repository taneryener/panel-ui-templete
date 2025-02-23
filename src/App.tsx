import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo w-32 h-32 react hover:animate-spin transition-transform duration-500" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl text-center mt-8 mb-4">Vite + React</h1>
      <div className="card p-6 text-center border border-gray-300 rounded-lg shadow-md">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="mt-4 text-gray-500">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-center text-gray-500 mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
