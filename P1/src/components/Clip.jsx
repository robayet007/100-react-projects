import React from 'react'

const Clip = ({copy}) => {
  return (
   <section>
    {copy &&
     (<div style={{
        position: 'absolute' , 
        bottom: "2rem"
    }}>copid to clipboard</div>)
     }
   </section>
  )
}

export default Clip