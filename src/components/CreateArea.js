import { useState } from "react";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';

export default function CreateArea({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote({
      ...note,
      [name]: value,
    });
  }
  return (
    <div >
      <form className="create-note">
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          value={note.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <Zoom in={true}>
        <Fab
          onClick={(e) => {
            e.preventDefault();
            onAdd(note);
            setNote({
              title: "",
              content: "",
            });
          }}
        >
          <AddIcon />
        </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}
