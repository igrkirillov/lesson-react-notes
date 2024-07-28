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

    await delay(3);
    return (await response.json()) as Note[];
}

async function delay(secs: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, secs * 1000);
    });
}