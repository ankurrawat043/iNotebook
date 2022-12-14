import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get All  notes
  const getNotes = async () => {
    // TODO:Api call
    //Api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        " auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5NmZkZDQzNmZiMGI3MzhmNjkzYTEyIn0sImlhdCI6MTY3MDg2MDYxNH0.V7-37Qq-tf7J_CmcGvFLz312IMi3OBDMmrq76fVoD0k",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
   
    
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    // TODO:Api call
    //Api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        " auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5NmZkZDQzNmZiMGI3MzhmNjkzYTEyIn0sImlhdCI6MTY3MDg2MDYxNH0.V7-37Qq-tf7J_CmcGvFLz312IMi3OBDMmrq76fVoD0k",
      },

      body: JSON.stringify({ title, description, tag }),
    });

    const note = {
      _id: "639769153ebdf76e3be212cf",
      user: "6396fdd436fb0b738f693a12",
      title: title,
      description: description,
      tag: tag,
      date: "2022-12-12T17:47:01.639Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = (id) => {
    //TODO: Api call
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    //Api call
    const response = await fetch(`${host}/api/notes/updatnote/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        " auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5NmZkZDQzNmZiMGI3MzhmNjkzYTEyIn0sImlhdCI6MTY3MDg2MDYxNH0.V7-37Qq-tf7J_CmcGvFLz312IMi3OBDMmrq76fVoD0k",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    //const json = response.json();

    //Logic to edit in Client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, editNote, deleteNote, addNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
