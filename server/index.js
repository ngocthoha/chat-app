const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const PORT = process.env.PORT || 5000;

const router = require("./router");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const cors = require("cors");

io.on("connection", (socket) => {
  console.log("We have a new connection!!");
  socket.on("join", ({ name, room }, callback) => {
    console.log(name, room);

    const error = true;

    if(error){
        callback({error: 'error'});
    }
    
  });
  socket.on("disconnect", () => {
    console.log("User had left");
  });
});
app.use(cors());
app.use(router);
server.listen(PORT, () => {
  console.log("server starting at port " + PORT);
});
