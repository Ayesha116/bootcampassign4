import React, { useState } from "react";
import "./Room.css"


function Room() {
  let [isLit , setLit] = useState(false)  
  let [temp , settemp] = useState(72)
      
  return (
    <div className = {`room ${isLit? "lit": "dark"}`}>
        <br/><br/><br/>
        <div >the room is {isLit ? 'lit' : 'dark'}</div>
        <button onClick = {()=>setLit(true)} >On</button>
        <button onClick = {()=>setLit(false)} >Off</button>
        <br/><br/><br/>
        <div>the temperature is {temp}</div>
        
        <button onClick = {()=>settemp(--temp)}>-</button>
        <button onClick = {()=>settemp(++temp)}>+</button>
    </div>
  )
  
}

export default Room;