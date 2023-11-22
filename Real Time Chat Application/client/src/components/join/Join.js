import React, { useState} from "react";
import {Link} from "react-router-dom";

import "./join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <div className="joinHeading"><div>JOIN</div></div>
        <input placeholder="name" name = "name" className="name"  type = "text" onChange = {(event)=> {setName(event.target.value);}} />
        <input placeholder="room" name = "room" className="room"  type = "text" onChange = {(event)=> {setRoom(event.target.value);}} />
        <Link className = "joinButton" to = {`/chat?name=${name}&room=${room}`}>
          
            <button  onClick = {(event)=> {
              if(!name || !room){
                event.preventDefault();
              }

            }} type = "button" >Sign In</button>
  
        </Link>
      </div>
    </div>

  )
}

export default Join;
