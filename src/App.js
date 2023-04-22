import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([])

  function addNote(note) {
    setNotes([
      ...notes,
      note
    ])
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {
        notes.map((note, index) => {
          return (
            <Note 
            key={index}
            id={index}
            title={note.title}
            content={note.content}
          />
          )
          
        })
      }
      
      <Footer />
    </div>
  );
}

export default App;
