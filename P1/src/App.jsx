import { useState } from "react";
const App = () => {
  const [inputvalue, setinputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputvalue);
    setinputValue('')
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputvalue}
          onChange={(e) => setinputValue(e.target.value)}
          placeholder="enter your name"
        />
        <button type="submit">submit</button>
      </form>
      <h1>name : {submittedValue} </h1>
    </div>
  );
};

export default App;
