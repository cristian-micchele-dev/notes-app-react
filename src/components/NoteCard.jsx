import { useContext, useState } from "react"
import { NoteContext } from "../context/note.context"
import "./NoteCard.css"

function NoteCard({note}) {
  const {updateNotes, deleteNote} = useContext(NoteContext)
  const [editTitle, setEditTitle] = useState(note.title)
  const [isEditing, setIsEditing] = useState(false)

  const handleInput = (e) => {
    setEditTitle(e.target.value)
    setIsEditing(true)
  }

  const handleBlur = () => { //significa que se ha perdido el foco
    if (isEditing && editTitle.trim() !== note.title) { //si se ha editado y no esta vacio
      const updatedNote = {...note, title: editTitle} //copia la nota y le cambia el title
      updateNotes(updatedNote)
    }
    setIsEditing(false)
  }

  const handleCheckbox = () => {
    const updatedNote = {...note, marked: !note.marked}
    updateNotes(updatedNote)
  }

  const handleDelete = () => {
    deleteNote(note.id)
  }

  return (
    <article className="note-card">
      <input
        type="text"
        className="card-title"
        value={editTitle}
        onChange={handleInput}
        onBlur={handleBlur}
      />
      <input type="checkbox" checked={note.marked} onChange={handleCheckbox} />
      <button className="delete-btn" onClick={handleDelete}>🗑️</button>
    </article>
  )
}

export default NoteCard