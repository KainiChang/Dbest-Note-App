import React from "react"
import{Link} from "react-router-dom"

export default function Sidebar(props) {

    const myDay=new Date();
    const noteElements = props.notes.map((note) => (
        <Link to={note.id}  key={note.id} className={`titles ${
            note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}>
                 <h1 className="text-snippet">{note.title}</h1> 
                 <button 
                    className="delete-btn"
                    onClick={(event)=>props.deleteNote(event,note.id)} >
                    <i className="gg-trash trash-icon"></i>
                </button> 
                <span className="text-dis">{note.body.split("\n")[0]}</span>
                <span className="text-dis">{myDay.getMonth()}/ {myDay.getDay()}, {myDay.getFullYear()}</span>


        </Link>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <button className="new-note" onClick={props.newNote}>Create new note</button>
            </div>
            <div className="notelisttitle">   Notes</div>
            {noteElements}
        </section>
    )
}
