import React, {useState} from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
          "_id": "639769143ebdf76e3be212cd",
          "user": "6396fdd436fb0b738f693a12",
          "title": "my title",
          "description": "Plese wake up early",
          "tag": "personal",
          "date": "2022-12-12T17:47:00.591Z",
          "__v": 0
        },
        {
          "_id": "639769153ebdf76e3be212cf",
          "user": "6396fdd436fb0b738f693a12",
          "title": "my title",
          "description": "Plese wake up early",
          "tag": "personal",
          "date": "2022-12-12T17:47:01.639Z",
          "__v": 0
        }
      ];

      const [notes, setNotes] = useState(notesInitial)
    
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
           { props.children}
        </NoteContext.Provider>
    )
};


export default NoteState;