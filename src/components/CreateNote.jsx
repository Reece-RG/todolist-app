import React, { useState } from 'react';

function CreateNote(props) {
  const time = new Date();
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    date: time.toLocaleDateString("en-GB", options)
  });
  function handleChange(event){
    event.target.name === "title"
    ? setNewNote({title: event.target.value, content: newNote.content, date: time.toLocaleDateString("en-GB", options)})
    : setNewNote({title: newNote.title, content: event.target.value, date: time.toLocaleDateString("en-GB", options)})
  };
  function handleAdd(event){
    props.onAdd(newNote);
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <input
        onChange={handleChange}
        name="title"
        placeholder="Title"
        value={newNote.title}
        />
        <textarea
        onChange={handleChange}
        name="content"
        placeholder="Make a note..."
        value={newNote.content}
        rows="4"
        />
        <input value={newNote.date}/>
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
};

export default CreateNote;
