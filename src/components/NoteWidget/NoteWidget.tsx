// @flow
import * as React from 'react';
import {Note} from "../../App";
import styles from "./note.module.css"

type NoteWidgetProps = {
    note: Note
};
export const NoteWidget = (props: NoteWidgetProps) => {
    const {note} = props;
    return (
        <div className={styles["container"]}>
            <span className={styles["text"]}>{note.text}</span>
        </div>
    );
};