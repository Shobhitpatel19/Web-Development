import React, {useState} from 'react'

function Ue1() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>This is a counter {count}</h1>
      <button onClick={()=>setCount(count+1)}>+1</button>
    </div>
  )
}

export default Ue1