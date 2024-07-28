// @flow
import * as React from 'react';
import updateIcon from "./update.png"
import styles from "./header.module.css"

type HeaderProps = {
    reloadNotes: () => void;
};

export const Header = (props: HeaderProps) => {
    const {reloadNotes} = props;
    return (
        <div className={styles["header"]}>
            <h1>Notes</h1>
            <a className={styles["update-link"]} href="#" onClick={reloadNotes}>
                <img className={styles["update-icon"]} src={updateIcon} alt="update icon"/>
            </a>
        </div>
    );
};