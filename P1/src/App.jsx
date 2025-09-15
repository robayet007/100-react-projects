import React from 'react'
import { useState , useEffect } from 'react'

const App = () => {
  const [count , setCount] = useState(0)
  useEffect(()=>{
       console.log('use effect')
       document.title = `counter ${count}`
  },[count])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count + 1)}>Click</button>
    </div>
  )
}

export default App