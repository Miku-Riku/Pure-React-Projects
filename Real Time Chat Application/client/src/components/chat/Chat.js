import React, {useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
// import queryString from 'query-string';
import io from 'socket.io-client';

const Chat = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [searchParams] = useSearchParams();
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const details = Object.fromEntries([...searchParams]);

    setName(details.name);
    setRoom(details.room);
    // console.log(details);

    const socket = io(ENDPOINT);
    socket.emit('join', details);

    return (() => {
      socket.emit('disconnect');
      socket.off();
    })

  }, [ENDPOINT, searchParams]);

  return(
    <div className='outerContainer'>
      <div className='innerContainer'>
      <h1>Chat</h1>

      </div>

    </div>
  )
};

export default Chat;


