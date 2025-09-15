import React from 'react'

const Profile = ({name , age , bio , id}) => {
  return (
    <div>
        <h1>Our introduction💕👍</h1>
        <h2>id : {id} </h2>
        <h3>name :{name}</h3>
        <h3>age :{age}</h3>
        <p>bio :{bio}</p>
    </div>
  )
}

export default Profile