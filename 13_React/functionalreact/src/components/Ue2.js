import React, {useState,useEffect} from 'react'

function Ue2() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('shobhit')

  useEffect(()=>{
    document.title = `This is my title ${count} ${name}`
  },[])  //componentdidMount 


  return (
    <div>
      <h1>This is a counter {count}</h1>
      <h1>{name}</h1>
      <button onClick={()=>setCount(count+1)}>+1</button>
      <button onClick={()=>setName('Adam')}>ChangeName</button>
    </div>
  )
}

export default Ue2