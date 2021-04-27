import './App.css';
import {Note} from './components/Note/Note.js'
import {useState} from 'react';


function App() {
  // Array con todas las notas (objetos) inputeadas
  const [notes, setNotes] = useState([]);

  // Nota que se esta inputeando en cada momento
  const [currentNote, setCurrentNote] = useState(
    {
      id: notes.length + 1 ,
      title: '',
      message: '',
      date: new Date().toISOString()
    }
  );

  const handleTitleChange = event => {
    setCurrentNote({
      ...currentNote,
      title: event.target.value
    });
  };


  const handleMessageChange = event => {
    setCurrentNote({
      ...currentNote,
      message: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(currentNote.title !== '' && currentNote.message !== ''){
    const noteToAdd = {
      ...currentNote,
      id: notes.length + 1,
      date: new Date().toISOString()
    };
    setNotes(notes.concat(noteToAdd))
  } else {
    alert ('You need to input a title and a message')
  }

  }

  return (
    <div className="App">
      
      {
      notes.length > 0 ?
      notes.map(note => (<Note key={note.id} title={note.title} message={note.message} />))
      : <div className="no-notes"> No hay notas que mostrar </div>
      
      }

      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Title' value={currentNote.title} onChange={handleTitleChange} />
        <input type='text' placeholder='Write your note' value={currentNote.message} onChange={handleMessageChange} />
        <button>Add Note</button>
      </form>

    </div>
  );
}

export default App;
