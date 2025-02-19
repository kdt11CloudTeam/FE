import React from "react";
import { useParams } from "react-router-dom";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import styles from "./BookListPage.module.css";
import BookList from "../../components/Dashboard/BookList";
import { groupList, bookList } from "./mockdata";

function BookListPage() {

    const { groupId } = useParams(); 
    // const group = groupList.find(g => g.groupId === groupId); 

    const filteredBookList = bookList.filter(book => book.groupId.toString() === groupId);

    return (
        <div className={styles.frame}>
            <div className={styles.sidebar}>
                <DashboardSidebar groupList = {groupList}/>
            </div>
            <div className={styles.booklist}>
                <p className={styles.title}>그룹 내 원하는 모아북을 선택해주세요.</p>       
                <BookList bookList = {filteredBookList}/>
            </div>
        </div>
    );
}

export default BookListPage;


