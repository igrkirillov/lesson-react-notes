import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from "./components/Header";
import {Notes} from "./components/Notes";
import {NewNote} from "./components/NewNote";
import {getNotes} from "./serverApi";

export type Note = {
    id: number | null
    text: string
}

export type AppState = {
    loading: boolean;
    notes: Note[]
}

function App() {
    const [appState, setAppState] = useState(getInitialAppState());
    const addNote = (note: Note) => {
        setAppState({...appState, notes: [...appState.notes, note]})
    }

    const removeNote = (note: Note) => {
        const foundIndex = appState.notes.findIndex(n => n.id == note.id);
        if (foundIndex >= 0) {
            setAppState({...appState, notes: appState.notes.splice(foundIndex, 1)})
        }
    }

    const reloadNotes = () => {
        setAppState({...appState, loading: true, notes: []})
        getNotes().then(notes => {
            setAppState({...appState, loading: false, notes: [...notes]})
        }).catch(handleError)
    }

    useEffect(() => {
        getNotes().then(notes => {
            setAppState({...appState, loading: false, notes: [...notes]})
        }).catch(handleError)
    }, []) //component did mount

    return (
        <>
            <Header reloadNotes={reloadNotes}></Header>
            {appState.loading
                ? <div className="loading">Loading in progress...........</div>
                : <Notes notes={appState.notes} removeNote={removeNote}></Notes>}
            <NewNote addNote={addNote}></NewNote>
        </>
    )
}

export default App

function getInitialAppState():AppState {
    return {
        loading: true,
        notes: []
    }
}

function handleError(error: Error) {
    alert(error);
}