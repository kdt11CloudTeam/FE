import React, { useState } from 'react';
// import styles from "./GroupListPage.module.css";

import GroupList from "../../components/Dashboard/GroupList";
import { groupList } from "./mockdata"; 

function GroupListPage() {
    const [currentGroupList, setGroupList] = useState(groupList);

    return (
            <div>
                <GroupList groupList={currentGroupList} setGroupList={setGroupList} /> 
            </div>
    );
}

export default GroupListPage;
