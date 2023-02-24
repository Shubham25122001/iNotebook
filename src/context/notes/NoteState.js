import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []


  const [notes, setNotes] = useState(notesInitial)


  //Get all Notes
  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmNDk3N2IyMWJjNDZiMTNmNjkwZjQ1In0sImlhdCI6MTY3NzA3NDAzOX0.jYR2kZxs0CZHH8iMiap566ifgQsaiYCS_6AgqYJ9j6A'
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }
     
  //Add a Note
  const addNote = async (title, description, tag) => {
    //Todo api call 
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmNDk3N2IyMWJjNDZiMTNmNjkwZjQ1In0sImlhdCI6MTY3NzA3NDAzOX0.jYR2kZxs0CZHH8iMiap566ifgQsaiYCS_6AgqYJ9j6A'
      },
      body: JSON.stringify({title, description, tag})
    });

   const json = await response.json();
   console.log(json);

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
  const deleteNote = async (id) => {
  //API call 
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmNDk3N2IyMWJjNDZiMTNmNjkwZjQ1In0sImlhdCI6MTY3NzA3NDAzOX0.jYR2kZxs0CZHH8iMiap566ifgQsaiYCS_6AgqYJ9j6A'
      }
    });
  const json = response.json();
  console.log(json)
    console.log("Deleting the note with id" + id)
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //APIT call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmNDk3N2IyMWJjNDZiMTNmNjkwZjQ1In0sImlhdCI6MTY3NzA3NDAzOX0.jYR2kZxs0CZHH8iMiap566ifgQsaiYCS_6AgqYJ9j6A'

      },
      body: JSON.stringify({title, description, tag})
    });
  const json = await response.json();

  let newNotes = JSON.parse(JSON.stringify(notes))
  //Login to edit in client 
  for (let index = 0; index < newNotes.length; index++) {
    const element = newNotes[index];
    if (element._id === id) {
    newNotes[index].title = title;
    newNotes[index].description = description;
    newNotes[index].tag = tag;
    break;
    }
  }
  console.log(id, notes);
  setNotes(newNotes);
}

return (
  <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
    {props.children}
  </NoteContext.Provider>
)
}

export default NoteState;