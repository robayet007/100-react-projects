import { useState, useContext } from "react";
import { personContext } from "./UserContext";

const UserUpadate = () => {
  const { updateUser } = useContext(personContext);
  const [newName, setnewName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      updateUser(newName);
      setnewName("");
    }
  };
  return (
    <div>
      <h2>Update user name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setnewName(e.target.value)}
          placeholder="enter your name"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UserUpadate;
