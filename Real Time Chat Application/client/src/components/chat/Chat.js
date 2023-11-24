import React, {useState, useEffect, useCallback, useRef} from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';

import {io} from 'socket.io-client';
import "./chat.css";
import Message from '../Messages/Messages.js';
import myImage from "./images/close.png";
import onlineIcon from "./images/online-icon.png";

const ENDPOINT = 'localhost:5000';
let socket;

const Chat = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const bottomRef = useRef(null);

  // console.log("meow");
  useEffect(() => {
    window.onbeforeunload = () => {
      console.log("Disconnected.");
      socket.emit('dsconn');
      socket.off();
    }
  }, [])

  useEffect(() => {
    // console.log("meow2"); 
    socket = (io.connect(ENDPOINT));
    const details = Object.fromEntries([...searchParams]);
    setRoom(details.room);
    setName(details.name);
    
    socket.emit('join', details, (error) => {
      alert(error);
      navigate('/');      
    });

    return (() => {
      console.log("Disconnected.");
      socket.emit('dsconn');
      socket.off();
    })

  }, [searchParams, navigate]);

  useEffect(() => {
    socket.on('sysmsg', (msg) => {
      setMessages([...messages, {name : 'admin', text : msg.trim()}]);
      // console.log(msg);
    })

    socket.on('message', (n, msg) => {
      // console.log(n);
      setMessages([...messages, {name : n.trim(), text : msg.trim()}]);     
    })
    
    bottomRef.current?.scrollIntoView({behaviour : 'smooth'});

  }, [messages]);

  // function to send message

  const sendMessage = useCallback((event) => {
    event.preventDefault();
    // console.log("hello");
    // setMessages([...messages, message]);
    
    if(message){
      socket.emit('message', message, (error) => {
        if(error){
          alert(error);
          navigate('/');
        }
      });
    }
    setMessage('');
  }, [message, navigate]);

  

  // const testMsg = (event) => {
    
  //   console.log(message);
  // }

  return(
    <div className='chatOuterContainer'>
      <div className='chatInnerContainer'>
        <div className='chatHeading'>
          <div>
            <div id='online-icon'><img src = {onlineIcon} alt='online' /></div>
            <div id = "roomName"><span>{room}</span></div>
            <div id='closeChat'> <Link id = "closeLink" to = {`/`}><img id = 'close' alt = "close" src = {myImage}/></Link>     </div>
          </div>
        </div>
        <div className='chatArea'>
          {(
            () => {
              let prevMsg = ''; /* 0 ------> otherMsg, 1 -------> myMsg..*/

              return messages.map((item, i) => {                
                         
                const element = <div key = {i}><Message currMsg = {item.name} message = {item.text} prevMsg={prevMsg} myName = {name} /></div>; 
                prevMsg = item.name;
                return element;
              }
                )
            }
            
          )()}
          <div ref = {bottomRef} ></div>
        </div>
        <div className='chatInput'>
          <textarea autoFocus value = {message} placeholder = 'Message' type = 'text' onChange={(event) => { setMessage(event.target.value); }} onKeyDown={(event) => {   return event.key === 'Enter' && !event.shiftKey ? sendMessage(event) : null}} />
          <div><div>Send</div></div>
        </div>
      </div>

    </div>
  )
};

export default Chat;


