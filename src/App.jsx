import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useContext } from 'react'
import { CountContext } from './context'

function App() {
  const [count, setCount] = useState(0)
  //wrap the Count component with CountContext.Provider
  return (
    <>
      <CountContext.Provider value={count} >
        <Count setCount={setCount}></Count>
      </CountContext.Provider>
    </>
  )
}

function Count({ count, setCount }) {

  return(
    <>
        <Countrender></Countrender>
        <Button setCount={setCount} ></Button> 
    </>
  )
}

function Countrender() {
  const count = useContext(CountContext);
  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

function Button({setCount}) {
  const count = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount( count + 1)}>Increment</button>
      <button onClick={() => setCount( count - 1)}>Decrement</button>
    </div>
  )
}

export default App
