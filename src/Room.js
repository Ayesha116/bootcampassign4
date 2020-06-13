import React, { useState } from "react";


function Room() {
  let [isLit , setLit] = useState(false)  
      
  return (
    <div>
        <div>the room is {isLit ? 'lit' : 'dark'}</div>
        <button onClick = {()=>setLit(!isLit)} >Toggle light</button>
    </div>
  )
  
}

export default Room;