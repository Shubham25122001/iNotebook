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
      "_id": "63f5y8f422d9d23c6124acf69",
      "user": "63f4977b21bc46b13f690f45",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-02-22T03:42:58.261Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial)
   
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
 }

 export default NoteState;