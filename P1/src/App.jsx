import { useState , useEffect } from "react"
const App = () => {
  const [name , setName] = useState(() =>{
    const saveNmae = localStorage.getItem("name")
    return  saveNmae ? JSON.parse(saveNmae) : "";
  })
useEffect(() =>{
  localStorage.setItem("name" , JSON.stringify(name))
}, [name])

const handleChange = (e) => {
  setName(e.target.value)
}

  return (
    <div>
      <h1>name : {name}</h1>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={() => setName("")}>clear</button>
    </div>
  )
}

export default App