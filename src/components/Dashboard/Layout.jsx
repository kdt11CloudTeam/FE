import React from 'react';
import styles from "./Layout.module.css";
import DashboardSidebar from "./DashboardSidebar";
import { groupList } from "../../pages/Dashboard/mockdata";

function Layout({ children }) {
    return (
        <div className={styles.frame}>
            <div className={styles.sidebar}>
                <DashboardSidebar groupList = {groupList}/>
            </div>
            <div className={styles.children}>
                { children }
            </div>
        </div>
    )
}

export default Layout;