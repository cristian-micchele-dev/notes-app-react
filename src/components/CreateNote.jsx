import { useContext, useState } from "react"
import { NoteContext } from "../context/note.context"
import "./CreateNote.css"

function CreateNote() {
    const { addNote } = useContext(NoteContext) // <--- usa addNote

    const [notesTitle , setNotesTitle] = useState('') 

    const createId = () => {
        return Date.now().toString(36) + Math.random().toString(36).slice(2) // <--- Date.now()
    }

    const handleInput = (e) => {
        setNotesTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!notesTitle.trim()) return; // Evita notas vacías
        const newNote = {id: createId(), title: notesTitle, marked: false}
        addNote(newNote)
        setNotesTitle('')
    }

  return (
   <form className="note-form" onSubmit={handleSubmit}>
    <input type="text" placeholder="Nueva Nota" className="note-title" value={notesTitle} onChange={handleInput}/>
    <button type="submit" className="create-btn">+</button>
   </form>
  )
}

export default CreateNote