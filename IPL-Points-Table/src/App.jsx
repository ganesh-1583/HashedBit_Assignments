import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IPLPointsTable from './IplPointsTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <IPLPointsTable />
    </>
  )
}

export default App
