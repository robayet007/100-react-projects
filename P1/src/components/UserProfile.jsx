import { useContext } from "react"
import { personContext } from "./UserContext"

const UserProfile = () => {
  const  {user}  = useContext(personContext)

  return (
    <div>
      <h1>User Profile</h1>
      <h1>Name : {user.name}</h1>
    </div>
  )
}

export default UserProfile
