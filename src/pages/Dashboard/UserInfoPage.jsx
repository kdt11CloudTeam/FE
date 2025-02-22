import React from 'react';
import styles from "./UserInfoPage.module.css";

import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import UserInfo from "../../components/Dashboard/UserInfo";
import { groupList, userData } from "./mockdata"

function UserInfoPage() {
    return (
        <div className={styles.frame}>
            <div className={styles.sidebar}>
                <DashboardSidebar groupList = {groupList}/>
            </div>
            <div className={styles.userinfo}>
                <UserInfo userData = {userData}/>
            </div>
        </div>
    );
}

export default UserInfoPage;
