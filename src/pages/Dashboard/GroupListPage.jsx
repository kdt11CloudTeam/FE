import React, { useState } from 'react';
import styles from "./GroupListPage.module.css";

import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import GroupList from "../../components/Dashboard/GroupList";
import { groupList } from "./mockdata"; 

function GroupListPage() {
    const [currentGroupList, setGroupList] = useState(groupList);

    return (
        <div className={styles.frame}>
            <div className={styles.sidebar}>
                <DashboardSidebar groupList={currentGroupList} />
            </div>
            <div className={styles.group}>
                <p className={styles.title}>원하는 그룹을 선택해주세요.</p>
                <GroupList groupList={currentGroupList} setGroupList={setGroupList} /> 
            </div>
        </div>
    );
}

export default GroupListPage;
