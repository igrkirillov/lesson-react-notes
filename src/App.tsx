import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from "./components/Header";
import {Notes} from "./components/Notes";
import {NewNote} from "./components/NewNote";

export type Note = {
    id: number | null
    text: string
}

function App() {
    const [notes, setNotes] = useState([] as Note[]);
    const addNote = (note: Note) => {
        setNotes([...notes, note]);
    }
    const reloadNotes = () => {

    }
    return (
        <>
            <Header reloadNotes={reloadNotes}></Header>
            <Notes notes={notes}></Notes>
            <NewNote addNote={addNote}></NewNote>
        </>
    )
}

export default App
