import React, { useState} from "react";
import {Link} from "react-router-dom";


const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <h1 className="heading">JOIN</h1>
        <input placeholder="name" name = "name" className="name"  type = "text" onChange = {(event)=> {setName(event.target.value);}} />
        <input placeholder="room" name = "room" className="room"  type = "text" onChange = {(event)=> {setRoom(event.target.value);}} />
        <Link to = {`/chat?name=${name}&room=${room}`}>
          <button onClick = {(event)=> {
            if(!name || !room){
              event.preventDefault();
            }

          }} className="singin" type = "submit" >Sign In</button>
        </Link>
      </div>
    </div>

  )
}

export default Join;
