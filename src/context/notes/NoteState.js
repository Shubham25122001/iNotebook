 import NoteContext from "./noteContext";
import { useState } from "react";
 
const NoteState = (props)=>{
   const notesInitial = [
    {
      "_id": "63f58f4g22d9d23c6124acf67",
      "user": "63f4977b21bc46b13f690f45",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-02-22T03:42:58.036Z",
      "__v": 0
    },
    {
      "_id": "63f58f422hd9d23c6124acf67",
      "user": "63f4977b21bc46b13f690f45",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-02-22T03:42:58.036Z",
      "__v": 0
    },
    {
      "_id": "63f58f422du9d23c6124acf67",
      "user": "63f4977b21bc46b13f690f45",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-02-22T03:42:58.036Z",
      "__v": 0
    },
    {
      "_id": "63f58f422ed9d23c6124acf67",
      "user": "63f4977b21bc46b13f690f45",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-02-22T03:42:58.036Z",
      "__v": 0
    },
    {
      "_id": "63f58f422dt9d23c6124acf67",
      "user": "63f4977b21bc46b13f690f45",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-02-22T03:42:58.036Z",
      "__v": 0
    },
    {
      "_id": "63f58f422db9d23c6124acf67",
      "user": "63f4977b21bc46b13f690f45",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-02-22T03:42:58.036Z",
      "__v": 0
    },
    {
      "_id": "63f58f422d9d23c6s124acf67",
      "user": "63f4977b21bc46b13f690f45",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-02-22T03:42:58.036Z",
      "__v": 0
    },
    {
      "_id": "63f58f422d9d23mc6124acf67",
      "user": "63f4977b21bc46b13f690f45",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-02-22T03:42:58.036Z",
      "__v": 0
    },
    {
      "_id": "63f58f422jd9dj23c6124acf67",
      "user": "63f4977b21bc46b13f690f45",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-02-22T03:42:58.036Z",
      "__v": 0
    },
    {
      "_id": "63f58f422d9qd23c6124acf67",
      "user": "63f4977b21bc46b13f690f45",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-02-22T03:42:58.036Z",
      "__v": 0
    },
    {
      "_id": "63yf58f422d9d23c6124acf67",
      "user": "63f4977b21bc46b13f690f45",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-02-22T03:42:58.036Z",
      "__v": 0
    },
    {
      "_id": "63f5y8f4d22d9ddf23c6124acf69",
      "user": "63f4977b21bc46b13f690f45",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-02-22T03:42:58.261Z",
      "__v": 0
    }
  ]


  const [notes, setNotes] = useState(notesInitial)
   

  //Add a Note
  const addNote = (title, description, tag)=>{
    //Todo api call 
    console.log("Adding a new note");
   const note = {
      "_id": "63f5y8f422d9dgdfdf23c612fhg4acf69",
      "user": "63f4977b21bc46b13f690f45",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-02-22T03:42:58.261Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }
  
  //Delete a Note
  const deleteNote = (id)=>{
     //Todo api call 
    console.log("Deleting the note with id" +id)
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
  }
  
  //Edit a Note
  const editNote = (id, title, description, tag)=>{

  }

  return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
 }

 export default NoteState;