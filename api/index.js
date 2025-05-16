const express = require("express");
const app = express();
const socketio = require('socket.io');

const http = require("http");
const server = http.createServer(app);

const io = socketio(server, {cors : {origin : 'http://localhost:3000'}});


const port = process.env.PORT || 5000;
const router = require("./router.js");
const { addUser, removeUser, getUser } = require("./users.js");


app.use(router);



io.on('connection', (socket) => {
  

  socket.on('join', ({name, room}, callback) => {
    console.log(socket.id, name);
    const {error, user} = addUser({id : socket.id, name, room});
    if(error){      
      callback(error);
    }
    else {
        console.log(`${name} has joined`);
        socket.join(room);
        socket.emit('sysmsg',  `Hello ${name}, Welcome to the room..` );
        socket.to(room).emit('sysmsg', `${name} has joined the chat room..`);      
    }    
  })

  socket.on('message', (message, callback) => {
    const user = getUser(socket.id);
    if(user){
      socket.to(user.room).emit('message', user.name, message);
      socket.emit('message', user.name, message);
      console.log(user.id, user.name, message);
    }
    else {
      // removeUser(socket.id);
      callback('Connection Error, Please join again..');      

    }
  })

  socket.on('dsconn', () => {
    const user = getUser(socket.id);
    if(user){
      console.log(user.id, user.name);
      removeUser(socket.id);
      socket.to(user.room).emit('sysmsg', `${user.name} has left the room.`);
      socket.leave(user.room);
      console.log(`${user.name} disconnected.`);
    }       
    socket.disconnect();    
    
  })

    
});



server.listen(port, (err)=>{
  if(err) {
    console.log(err);
  }else {
    console.log(`Server is listening on ${port}`);
  }
});
