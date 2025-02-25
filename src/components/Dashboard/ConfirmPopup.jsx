import styles from "./ConfirmPopup.module.css";
import React from "react";

function ConfirmPopup({ message, onConfirm, onCancel }) {
    return (
        <div className={styles.frame}>
            <div className={styles.innerFrame}>
                <p>{message}</p>
                <div className={styles.buttonFrame}>
                    <button onClick={onConfirm}>확인</button>
                    <button onClick={onCancel}>취소</button>
                </div>
            </div>       
        </div>
    );
}

export default ConfirmPopup;