import { useState } from "react";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(inputValue.trim() == '') return;
    setTodos([...todos , inputValue])
    setinputValue('')
  }
  const handleDelete = (index) =>{
   const updateTodo = todos.filter((_, i)=> i !== index)
   setTodos(updateTodo)
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
            placeholder="Enter your todo"
          />
          <button type="submit">Add</button>
        </form>

        <ul >
          {todos.map((todo , i)=>(
            <li key={i}>
              <span >{todo}</span>
              <span onClick={()=> handleDelete(i)}>❌</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
