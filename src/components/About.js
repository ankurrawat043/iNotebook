import React from 'react';
import noteContext from '../context/notes/noteContext';
import { useContext, useEffect } from 'react';

export default function About() {
  const a = useContext(noteContext);
  useEffect(() => {
   a.update();
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div>
      This is About.  {a.state.name}
    </div>
  )
}
