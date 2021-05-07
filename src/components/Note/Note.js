import './Note.css'


export const Note = ({id, content, important}) => {
  let isImportant = 'Importante';

  if(important === false) isImportant = 'Normal';

  return (
    <div className="Note">
      <h1 className="id">{id}</h1>
      <p className="message">{content}</p>
      <p className="is-important">Prioridad: {isImportant}</p>
    </div>

  )
}

