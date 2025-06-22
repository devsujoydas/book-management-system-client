import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-3xl font-semibold flex justify-center items-center h-[85vh] '>
        <h1>Book Management System</h1>
      </div>
    </>
  )
}

export default App
