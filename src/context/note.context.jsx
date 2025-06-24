import { createContext, useState, useEffect } from "react";

const NoteContext = createContext();
 
 const API_URL = "https://ca2fbd96142ff9399644.free.beeceptor.com/api/notes/";

function NoteProvider(props) {
    const [notes, setNotes] = useState([]);
    const [error, setError] = useState(null);

    // Llama a getNotes automáticamente al montar el provider
    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        try {
            setError(null);
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('No se pudo obtener las notas');
            const data = await response.json();
            setNotes(data.reverse());
        } catch (error) {
            setError(error.message || 'Error al obtener las notas');
        }
    }

    const addNote = (newNote) => {
      try {
        fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newNote),
        });
         setNotes([newNote, ...notes]);
      } catch (error) {
        setError(error.message || 'Error al agregar la nota');
      }
    }

    const updateNotes = async (updateNote) => {
        try {
            await fetch(`${API_URL}${updateNote.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateNote),
            });
            const newNotes = notes.map((note) =>
                note.id === updateNote.id ? updateNote : note
            );
            setNotes(newNotes);
        } catch (error) {
            setError(error.message || 'Error al actualizar la nota');
        }
    };

    const deleteNote = async (id) => {
        try {
            await fetch(`${API_URL}${id}`, {
                method: "DELETE",
            });
            setNotes(notes.filter((note) => note.id !== id));
        } catch (error) {
            setError(error.message || 'Error al eliminar la nota');
        }
    };

    return <NoteContext.Provider value={{notes,setNotes, updateNotes, addNote, getNotes, deleteNote, error}}> {/* el value es para compartir informacion */}
            {props.children}
            </NoteContext.Provider>;
}

export { NoteContext, NoteProvider };