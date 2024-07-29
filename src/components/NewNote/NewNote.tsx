// @flow
import {FormEvent, useRef} from 'react';
import styles from "./newnote.module.css"
import newnoteIcon from "./newnote.png"
import {Note} from "../../App";

type NewNoteProps = {
    addNote: (note: Note) => void
};
export const NewNote = (props: NewNoteProps) => {
    const {addNote} = props;
    const formRef = useRef<HTMLFormElement>(null);
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addNote({
            text:  (event.currentTarget[0] as HTMLTextAreaElement).value,
            id: null
        });
        event.currentTarget.reset();
    }
    return (
        <form className={styles["form"]} ref={formRef} onSubmit={onSubmit}>
            <label htmlFor="note-text">New Note</label>
            <textarea id="note-text" className={styles["note-text"]} required={true}/>
            <div className={styles["actions-container"]}>
                <a className={styles["new-link"]} href="#" onClick={() => {formRef?.current?.requestSubmit(null)}}>
                    <img className={styles["new-icon"]} src={newnoteIcon} alt="new icon"/>
                </a>
            </div>
        </form>
    );
};