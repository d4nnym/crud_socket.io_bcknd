import app from "./app.js"
import http from "http"
import {Server as WebSocketServer} from "socket.io"
import sockets from "./socket.js"
import "./database.js"

const server = http.createServer(app);

const httpServer = server.listen(
      app.get("port"),
      ()=>{console.log("Servidor abierto en el puerto",app.get("port"))}
);

const io = new WebSocketServer(httpServer);

sockets(io);



// app.listen(app.get("port"),()=>{console.log("Servidor abierto en el puerto",app.get("port"))})



