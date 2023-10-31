const express = require("express");
const app = express();
const socketio = require('socket.io');

const http = require("http");
const server = http.createServer(app);

const io = socketio(server, {cors : {origin : 'http://localhost:3000'}});


const port = process.env.PORT || 5000;
const router = require("./router.js");


app.use(router);



io.on('connection', (socket) => {
  console.log("A new user connected!!!");

  socket.on('join', ({name, room}) => {
    console.log(name);
    console.log(room);
  })

  socket.on('disconnect', ()=> {
    console.log('user disconnected!!!');
  })
});



server.listen(port, (err)=>{
  if(err) {
    console.log(err);
  }else {
    console.log(`Server is listening on ${port}`);
  }
});
