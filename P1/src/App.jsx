import React from 'react'

const App = () => {
  const userInfo = [
    {id:1 , name : "robayet"  , rollNum : 5},
    {id:2 , name : "huxen"  , rollNum : 6},
    {id:3 , name : "huxen"  , rollNum : 7},
]
  return (
    <div>
      {userInfo.map((users)=>
        <ul key={users.id}>
          <li>{users.id}</li>
          <li>{users.name}</li>
          <li>{users.rollNum}</li>
        </ul>
      )}
    </div>
  )
}

export default App
