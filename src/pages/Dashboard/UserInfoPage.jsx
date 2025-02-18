import React from 'react';
import styles from "./UserInfoPage.module.css";

import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import UserInfo from "../../components/Dashboard/UserInfo";

function UserInfoPage({ user }) {
    return (
        <div className={styles.frame}>
            <div className={styles.sidebar}>
                <DashboardSidebar />
            </div>
            <div className={styles.userinfo}>
                <UserInfo user={user} />
            </div>
        </div>
    );
}

export default UserInfoPage;
