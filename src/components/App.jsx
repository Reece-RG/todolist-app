import React, {useState} from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import CreateNote from './CreateNote.jsx';
import Note from './Note.jsx';


function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(function (prevNotes){
      return [...prevNotes, newNote];
    });
  };

  function deleteNote(id){
    setNotes(function (prevNotes){
      return prevNotes.filter(function (thisNote, index){
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map(function (thisNote, index){
        return (
        <Note
        onDelete={deleteNote}
        key={index}
        id={index}
        title={thisNote.title}
        content={thisNote.content}
        date={thisNote.date}
        />
      );
      })}
      <Footer />
    </div>
  );
};

export default App;
