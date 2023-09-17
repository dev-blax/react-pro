import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Esignature from './Projects/01-Signature/Esignature'
import RandomColors from './Projects/02-RandomColors/RandomColors'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Esignature /> */}
      <RandomColors />
    </>
  )
}

export default App
