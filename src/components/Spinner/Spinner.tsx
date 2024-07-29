// @flow
import styles from "./spinner.module.css"
import spinnerGif from "./spinner.gif"

export function Spinner() {
    return (
        <div className={styles["spinner-dialog-base"]}>
            <div className={styles["spinner-dialog"]}>
                <div className={styles["enter-dialog-container"]}>
                    <img src={spinnerGif} alt="image spinner"></img>
                </div>
            </div>
        </div>
    );
};