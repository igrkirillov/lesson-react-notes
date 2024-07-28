// @flow
import * as React from 'react';
import {Note} from "../../App";
import styles from "./note.module.css"
import removeIcon from "./remove.png";

type NoteWidgetProps = {
    note: Note,
    removeNote: (note: Note) => void
};
export const NoteWidget = (props: NoteWidgetProps) => {
    const {note, removeNote} = props;
    const onClickRemove = () => {
        removeNote(note);
    }
    return (
        <div className={styles["container"]}>
            <span className={styles["text"]}>{note.text}</span>
            <a className={styles["remove-link"]} href="#" onClick={onClickRemove}>
                <img className={styles["remove-icon"]} src={removeIcon} alt="remove icon"/>
            </a>
        </div>
    );
};