import { useState } from "react";

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
    <div>
      <form>
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
        <button
          onClick={(e) => {
            e.preventDefault();
            onAdd(note);
            setNote({
              title: "",
              content: "",
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
