import {Server} from 'socket.io';
import {createServer} from 'http';
import express from "express";
import cors from 'cors'
import dbConnection from "./db/conn.js";

import user from "./models/user.model.js";

import  router from "./routes/user.routes.js";

import cookieParser from "cookie-parser"
const app = express();
const server=createServer(app);
const io=new Server(server,{
  cors:{
      origin:'*',
      credentials:true
  }
});

app.use(cors({
  origin:'*',
  credentials:true
}))

io.on('connection',(socket)=>{

  socket.on('join-community',(communityId)=>{
    socket.join(communityId);
    console.log("User Joined Room: " + communityId);
  })
  socket.on('chat',(message,communityId)=>{
    io.to(communityId).emit(msg);
  })

})
const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/api",router)

app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

dbConnection.on("error", (err) => {
  console.error("MongoDB Connection Error:", err);
});

dbConnection.once("open", () => {
  console.log("MongoDB Connection Established");
});

server.listen(port, () => {
  console.log(`Server is started at ${port}`);
});
export {io};
