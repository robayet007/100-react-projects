import { useState } from 'react'

const Chack = () => {
    const [name , setName] = useState('')
  return (
    <div>
    <div>{name}</div>
    <button onClick={()=> setName("robayet")}>click</button>
    <button onClick={()=> setName('')}>remove</button>
    </div>
  )
}

export default Chack