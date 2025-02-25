import React from "react";
import { useParams } from "react-router-dom";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import styles from "./BookListPage.module.css";
import BookList from "../../components/Dashboard/BookList";
import { bookList } from "./mockdata";

function BookListPage() {

    const { groupId } = useParams(); 
    const filteredBookList = bookList.filter(book => book.groupId.toString() === groupId);

    return (
        <div>
            <BookList initialBookList = {filteredBookList}/>
        </div>
    );
}

export default BookListPage;


