import React from 'react';
import styles from "./UserInfoPage.module.css";
import DashboardSidebar from "../../components/DashboardSidebar";

function UserInfoPage({ user }) {
    return (
        <div className={styles.frame}>
        <DashboardSidebar />
        <div>BookList</div>
    </div>
    )
}

export default UserInfoPage;