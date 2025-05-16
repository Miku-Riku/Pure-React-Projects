import React, { useState} from "react";
import {Link} from "react-router-dom";

import "./join.css";
import JoinBackground from "../joinBackground/JoinBackground";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  // console.log('riku');
  

  return (
    <>
    
    <div className="joinOuterContainer">
      <div className="bg"> 
        <JoinBackground />
      </div>
      <div className="joinInnerContainerWrapper">
        <div className="joinInnerContainer">
        <div className="joinHeading"><div><span>JOIN</span></div></div>
          <input autoComplete="off" placeholder="name" name = "name" className="name"  type = "text" onChange = {(event)=> {setName(event.target.value);}} />
          <input autoComplete="off" placeholder="room" name = "room" className="room"  type = "text" onChange = {(event)=> {setRoom(event.target.value);}} />
          <Link className = "joinButton" to = {`/chat?name=${name}&room=${room}`}>
            
              <button  onClick = {(event)=> {
                if(!name || !room){
                  event.preventDefault();
                }

              }} type = "button" >Log in</button>
    
          </Link>
        </div>
      </div>
      
    </div>
    </>

  )
}

export default Join;


