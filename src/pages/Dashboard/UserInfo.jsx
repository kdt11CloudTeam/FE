import React from 'react';
import styles from "./UserInfo.module.css";

function UserInfo({ user }) {
    return (
        <div className={styles.frame}>
        <DashboardSidebar />
        <div>BookList</div>
    </div>
    )
}