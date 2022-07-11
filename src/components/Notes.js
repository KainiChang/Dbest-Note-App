import React from "react";
import Sidebar from './NoteComp/Siderbar';
import Editor from './NoteComp/Editor';
import Split from "react-split";
import { nanoid } from "nanoid";
import {
    addDoc,
    getDocs,
    setDoc,
    doc,
    deleteDoc,
    updateDoc
} from "firebase/firestore";
import {onSnapshot, collection} from "firebase/firestore"
import { db } from "../firebase-config";


function Notes() {
    const [notes, setNotes] = React.useState([]);
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )
    const notesColRef = collection(db, "notes");



    React.useEffect(() => {
        onSnapshot(notesColRef,(snapshot)=>{
            let notedata =[]
            snapshot.docs.map((doc) => notedata.push(
                {...doc.data()}
            ))
            //  snapshot.docs.map((doc) => {
            //     if(doc.data.id===currentNoteId){
            //         notedata.unshift({...doc.data()})
            //       }else{notedata.push(...doc.data())}
            //  }
            // )
            setNotes(notedata)  
                  // setNotes(oldNotes => {
        //     const newArray=[]
        //     for(let i=0; i<oldNotes.length;i++){
        //         const oldNote=oldNotes[i]
        //         if(oldNote.id===currentNoteId){
        //             newArray.unshift({...oldNote, body: text})
        //         }else{newArray.push(oldNote)}
        //     }
        //     return newArray
        // })         
        })
    }, [])

    function createNewNote() {
        const id =nanoid()
        const newNote = {
            body: "# Type your markdown note here",
            title: `Note ${notes.length + 1}`,
            id: id,
        }
        // addDoc(notesColRef, newNote)
        setDoc(doc(db, 'notes', id), newNote);
        setCurrentNoteId(newNote.id)
    }

    function updateNote(text) {
        const noteRef = doc(db, "notes", currentNoteId)
        updateDoc(noteRef, { body: text })
        // setNotes(oldNotes => {
        //     const newArray=[]
        //     for(let i=0; i<oldNotes.length;i++){
        //         const oldNote=oldNotes[i]
        //         if(oldNote.id===currentNoteId){
        //             newArray.unshift({...oldNote, body: text})
        //         }else{newArray.push(oldNote)}
        //     }
        //     return newArray
        // })
    }

    function deleteNote(event, noteId) {
        event.stopPropagation()
        const noteRef=doc(db,"notes",noteId)
        deleteDoc(noteRef)
        // setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId))
    }

    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    return (
        <div className="main2">
            {
                notes.length > 0
                    ?
                    <Split
                        sizes={[30, 70]}
                        direction="horizontal"
                        className="split"
                    >
                        <Sidebar
                            notes={notes}
                            currentNote={findCurrentNote()}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            deleteNote={deleteNote}
                        />
                        {
                            currentNoteId &&
                            notes.length > 0 &&

                            <Editor
                                currentNote={findCurrentNote()}
                                updateNote={updateNote} />


                        }
                    </Split>
                    :
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button
                            className="first-note"
                            onClick={createNewNote}
                        >
                            Create one now
                        </button>
                    </div>

            }
        </div>
    )
}

export default Notes;
