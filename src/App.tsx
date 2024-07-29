import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from "./components/Header";
import {Notes} from "./components/Notes";
import {NewNote} from "./components/NewNote";
import {deleteNote, getNotes, saveNote} from "./serverApi";
import {Spinner} from "./components/Spinner";

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
        setAppState({...appState, loading: true});
        saveNote(note)
            .then(() => {setAppState({...appState, notes: [...appState.notes, note]})})
            .catch(getErrorHandler(appState, setAppState))
    }

    const removeNote = (note: Note) => {
        const foundIndex = appState.notes.findIndex(n => n.id == note.id);
        if (foundIndex >= 0) {
            setAppState({...appState, loading: true});
            deleteNote(note)
                .then(() => {
                    const newNotes: Note[] = [...appState.notes];
                    newNotes.splice(foundIndex, 1);
                    setAppState({...appState, notes: newNotes});
                })
                .catch(getErrorHandler(appState, setAppState))
        }
    }

    const reloadNotes = () => {
        setAppState({...appState, loading: true, notes: []})
        getNotes()
            .then(notes => {setAppState({...appState, loading: false, notes: [...notes]})})
            .catch(getErrorHandler(appState, setAppState))
    }

    useEffect(() => {
        getNotes().then(notes => {
            setAppState({...appState, loading: false, notes: [...notes]})
        }).catch(getErrorHandler(appState, setAppState))
    }, []) //component did mount

    return (
        <>
            <Header reloadNotes={reloadNotes}></Header>
            {appState.loading
                ? <Spinner></Spinner>
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

function getErrorHandler(appState: AppState, setAppState: (appState: AppState) => void) {
    return (error: Error) => {
        console.log(error);
        alert(error);
        setAppState({...appState, loading: false});
    }
}