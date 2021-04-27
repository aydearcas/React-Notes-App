import './Note.css'


export const Note = ({title, message}) => {


  return (
    <div className="Note">
      <h1 className="title">{title}</h1>
      <p className="message">{message}</p>
    </div>

  )
}

