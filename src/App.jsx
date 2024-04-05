import { useState } from "react"

function App() {
  const [counter,setCounter]=useState(1)
  // let counter =15
  const addValue =() => {
    console.log("clicked",counter)
    let counter2=counter+1
    setCounter(counter2)
  } 
  const removeValue =()=>{
    console.log("remove btn clicked",counter)
    setCounter(counter-1)
  }
  return (
    <div>
      <h1>chai or react</h1>
      <h3>counter value {counter}</h3>
      <button onClick={addValue}>Increase{counter} </button>
      <br/>
      <button onClick={removeValue}>Decrease{counter}</button>
     
    </div>
  )
}

export default App
