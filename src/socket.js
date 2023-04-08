import User from "./models/User.js";
import {createUser,getUsers,getUser} from "./controllers/user.controller.js"


export default (io) => {

  io.on("connection", (socket) => {

    console.log("Nueva conexión",socket.id);

    // cargar todos los usuarios
    const emitUsers = async () => {
      const users = await getUsers();
      io.emit("server:users", users);
      
    };

    emitUsers() // emitir usuarios

    // cargar usuario por id
    const emitUser = async (data) => {
      const user = await getUser(data);
      io.emit("server:user", user);
    }

    // crear usuario
    socket.on("client:createuser", createUser);
    // obtener usuario
    socket.on("client:user",emitUser);

    socket.on("disconnect", () => {
      console.log("Usuario desconectado",socket.id);
    });
    
  });

  

};

/*

  io.on("connection",(socket)=>{

    const emitNotes = async () => {
      const notes = await Note.find()
      io.emit("loadnotes",notes)
      console.log(notes)
    }

    emitNotes()

    socket.on("newnote",async (data)=>{
      const note = new Note({ title: data.title, description: data.description })
      await note.save()
      emitNotes()
    })

    console.log("Nueva coneción");
  });  */
