import { useContext } from "react"
import HeaderComponent from "../components/HeaderComponent"
import NoteCard from "../components/NoteCard"
import { NoteContext } from "../context/note.context"
import "./NotePage.css"
import CreateNote from "../components/CreateNote"


function NotesPage() {
    // extraemos notes y error de NoteContext
    const {notes, error} = useContext(NoteContext)
    
    //usamos el map para recorrer la lista
    const noteCards = notes.map((note) => {
      return (
          <li key={note.id}>
          <NoteCard note={note} />
        </li>
      )
    })
    
  return (
    <>
    <HeaderComponent/>

    <section id="notes-page">
    
    {error && <div className="error-message">{error}</div>}
    <ul className="note-list">
      <li>
        <CreateNote/>
      </li>
      {noteCards}
      </ul>
    </section>
    
    </>
    
  )
}

export default NotesPage