import React, { useState } from 'react';
import styles from "./GroupListPage.module.css";

import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import GroupList from "../../components/Dashboard/GroupList";
import initialGroupList from "./mockdata"; 

function GroupListPage() {
    const [groupList, setGroupList] = useState(initialGroupList);

    return (
        <div className={styles.frame}>
            <div className={styles.sidebar}>
                <DashboardSidebar groupList={groupList} />
            </div>
            <div className={styles.group}>
                <p className={styles.title}>원하는 그룹을 선택해주세요.</p>
                <GroupList groupList={groupList} setGroupList={setGroupList} /> 
            </div>
        </div>
    );
}

export default GroupListPage;
