import React from 'react'

const counter = () => {
    const[count,setcounter]=useState(0);
    const handleIncrement = () => {
      setcount(count+1)
    }
  return (
    <div>
        <h1>counter</h1>
        <button onclick={()=>setcount(count+1)}>Increment</button>
        <button onClick={()=>setcount(0)}>Reset</button>
        <button onclick={()=>setcount(count-1)}>decrement</button>
    </div>
  )
}

export default counter