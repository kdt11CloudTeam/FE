import React from "react";
// 피그마 기준 3번 화면: 생성한 모아북들을 보여주는 화면
import DashboardSidebar from "../../components/DashboardSidebar";
import styles from "./BookListPage.module.css";

function BookListPage() {
    return (
        <div className={styles.frame}>
            <DashboardSidebar />
            <div>BookList</div>
        </div>
    );
}

export default BookListPage;
