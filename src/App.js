import './App.css';
import {Note} from './components/Note/Note.js'
import axios from 'axios';
import {useState, useEffect} from 'react';


function App() {
  // Array con todas las notas (objetos) inputeadas
  const [notes, setNotes] = useState([]);

  // Nota que se esta inputeando en cada momento
  const [currentNote, setCurrentNote] = useState(
    {
      id: notes.length + 1 ,
      content: '',
      important: false,
      // date: new Date().toISOString()
    }
  );

  useEffect(() => {
    axios.get('https://enigmatic-inlet-03024.herokuapp.com/api/notes')
    .then(response => {
      const { data } = response
      setNotes(data);
    });
  }, []);

 /*  const handleTitleChange = event => {
    setCurrentNote({
      ...currentNote,
      title: event.target.value
    });
  }; */


  const handleContentChange = event => {
    setCurrentNote({
      ...currentNote,
      content: event.target.value
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

  setCurrentNote({
    content: ''
  });
  }

  return (
    <div className="App">
      
      {
      notes.length > 0 ?
      notes.map(note => (<Note key={note.id} content={note.content} important={note.important} />))
      : <div className="no-notes"> No hay notas que mostrar </div>
      
      }
    
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Write your note' value={currentNote.content} onChange={handleContentChange} />
        <button>Add Note</button>
      </form>

    </div>
  );
}

export default App;
