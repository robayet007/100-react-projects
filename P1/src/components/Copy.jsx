import { useState } from "react";
import Clip from "./Clip";

const Copy = () => {
    const [inputValue , setInputValue] = useState('')
    const [copy , setCopy] = useState(false)
  const handleCopy = () =>{
    navigator.clipboard.writeText(inputValue).then(()=>{
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
        }, 1000);
    })
  }
  return (
    <div>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="type copy text" />
        <button onClick={handleCopy}>copy</button>
        <Clip copy={copy}/>

    </div>
  )
}

export default Copy