const express = require("express");
const app = express();
const socketio = require('socket.io');

const http = require("http");
const server = http.createServer(app);

const io = socketio(server);
const port = process.env.PORT || 5000;
const router = require("./router.js");

app.use(router);
app.get('/', (req, res) => {
  res.send("Server uis running..");
})
server.listen(port, (err)=>{
  if(err) {
    console.log(err);
  }else {
    console.log(`Server is listening on ${port}`);
  }
})
