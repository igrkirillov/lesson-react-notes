// @flow
import {Note} from "../../App";
import styles from "./notes.module.css"
import {NoteWidget} from "../NoteWidget/NoteWidget";

type ContentProps = {
    notes: Note[],
    removeNote: (note: Note) => void
};
export const Notes = (props: ContentProps) => {
    const {notes, removeNote} = props;
    return (
        <div className={styles["container"]}>
            {notes.map(note => <NoteWidget key={note.id} note={note} removeNote={removeNote}></NoteWidget>)}
        </div>
    );
};