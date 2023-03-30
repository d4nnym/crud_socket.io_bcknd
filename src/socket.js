import Note from './models/Note.js'


export default (io) =>{

  io.on("connection",()=>{
    console.log("Nueva conexión");
  })


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

}