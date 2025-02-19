import React from "react";
import { useParams } from "react-router-dom";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import styles from "./BookListPage.module.css";
import groupList from "./mockdata";

function BookListPage() {

    const { groupId } = useParams(); // 현재 URL에서 groupId 가져오기
    // const group = groupList.find(g => g.groupId === groupId); // 해당 그룹 찾기

    // if (!group) {
    //     return <h2>해당 그룹을 찾을 수 없습니다.</h2>;
    // }

    return (
        <div className={styles.frame}>
            <DashboardSidebar groupList = {groupList}/>
            <div>BookList</div>
        </div>
    );
}

export default BookListPage;


