import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count count={count} setCount={setCount}> </Count>
    </>
  )
}

function Count({ count, setCount }) {

  return(
    <>
        <Countrender count={count} ></Countrender>
        <Button count={count} setCount={setCount} ></Button> 
    </>
  )
}

function Countrender({ count }) {
  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

function Button({ count,setCount }) {
  return (
    <div>
      <button onClick={() => setCount( count + 1)}>Increment</button>
      <button onClick={() => setCount( count - 1)}>Decrement</button>
    </div>
  )
}

export default App
