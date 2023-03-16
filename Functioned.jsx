import React from 'react'
import './global2.css'

const App = () => {
  let [Count,setCount]=React.useState(0)
  
  let handleIncrement=()=> {
    setCount(Count + 1)
  }

  let handleDecrement=()=> {
    setCount(Count - 1 )
  }

  let handlereset =()=> {
    setCount(0)
  }

  return (
    <>
    <div className='MainDiv'>
    <h1>{Count}</h1> </div>
    <div className='btngroup'>
    <button onClick={handleIncrement}> + Increment</button>
    <button onClick={handleDecrement}> - Decrement</button>
    <button onClick={handlereset}>Reset</button>
    </div>
    </>
  )
}
export default App