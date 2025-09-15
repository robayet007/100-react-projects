import { useState } from "react"

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [inputValue , setInputValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos , inputValue])
    setInputValue('')
  }
  const handleChange = e => {
    setInputValue(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder="type you todo"/>
        <button type="submit">add</button>
      </form>

      <ul>
        {todos.map((todo , i)=> 
        <li key={i}>{todo}</li>
        )}
      </ul>
    </div>
  )
}

export default TodoList