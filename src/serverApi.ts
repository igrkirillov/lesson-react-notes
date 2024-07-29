import conf from "../config/notes.json"
import {Note} from "./App";
export async function getNotes() {
    const response = await fetch(conf.serverUrl + "/notes", {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
    }

    await delay(1);
    return (await response.json()) as Note[];
}

export async function saveNote(note: Note) {
    const response = await fetch(conf.serverUrl + "/notes", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: JSON.stringify(note)
    });

    if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
    }

    await delay(1);
}

export async function deleteNote(note: Note) {
    const response = await fetch(conf.serverUrl + "/notes/" + note.id, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
    }

    await delay(1);
}

async function delay(secs: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, secs * 1000);
    });
}