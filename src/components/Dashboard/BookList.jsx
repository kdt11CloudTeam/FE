// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import styles from './BookList.module.css';
// import addBook from "../../assets/images/addBook.png";
// import mockDoc from "../../assets/images/mockDoc.png"

// function BookList({ initialBookList }) {
//     const navigate = useNavigate();
//     const { groupId } = useParams();
    
//     // bookList를 useState로 관리
//     const [bookList, setBookList] = useState(initialBookList || []);

//     const handleAddBook = () => { // 이후 책 편집 페이지에서 저장하면서 데이터베이스에 저장된 내용을 axios 요청으로 받아오면서 bookList를 업데이트해야 함. 
//         // bookList의 마지막 bookId 가져오기
//         const lastBookId = bookList.length > 0 ? bookList[bookList.length - 1].bookId : 0;
//         const newBookId = Number(lastBookId) + 1;
//         navigate(`/groups/${groupId}/books/${newBookId}/edit`); // booklist의 마지막 bookId + 1로 이동하도록 수정
//         // /groups/:groupId/books/:bookId/edit
//     };

//     return (
//         <div className={styles.frame}>
//             <p>그룹 내 원하는 모아북을 선택해주세요.</p>    
//             <div className={styles.gridFrame}>
//                 {bookList.map((book) => (
//                     <button 
//                         className={styles.button} 
//                         key={book.bookId} 
//                         onClick={() => navigate(`/groups/${groupId}/books/${book.bookId}`)} 
//                     >
//                         <img src={book.coverImage || mockDoc} alt={book.name} />
//                         <p>{book.name}</p> 
//                     </button>
//                 ))}
//                 <button className={styles.addBookButton} onClick={handleAddBook}>
//                     <img src={addBook} alt="책 추가" />
//                     <p>추가하기</p>
//                 </button>
//             </div>         
//         </div>
//     );
// }

// export default BookList;


import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './BookList.module.css';
import addBook from "../../assets/images/addBook.png";
import mockDoc from "../../assets/images/mockDoc.png";

function BookList({ initialBookList }) {
    const navigate = useNavigate();
    const { groupId } = useParams();
    
    // bookList를 useState로 관리하고, initialBookList가 변경될 때 업데이트
    const [bookList, setBookList] = useState(initialBookList || []);

    useEffect(() => {
        setBookList(initialBookList);
    }, [initialBookList]);

    // 새로운 책 추가 버튼 클릭 시 동작
    const handleAddBook = () => {
        // bookList가 비어 있을 경우 bookId를 1로 설정
        const lastBookId = bookList.length > 0 ? bookList[bookList.length - 1].bookId : -1;
        const newBookId = lastBookId + 1;

        navigate(`/groups/${groupId}/books/${newBookId}/edit`);
    };

    return (
        <div className={styles.frame}>
            <p>그룹 내 원하는 모아북을 선택해주세요.</p>    
            <div className={styles.gridFrame}>
                {bookList.map((book) => (
                    <button 
                        className={styles.button} 
                        key={book.bookId} 
                        onClick={() => navigate(`/groups/${groupId}/books/${book.bookId}`)} 
                    >
                        <img src={book.coverImage || mockDoc} alt={book.name} />
                        <p>{book.name}</p> 
                    </button>
                ))}
                <button className={styles.addBookButton} onClick={handleAddBook}>
                    <img src={addBook} alt="책 추가" />
                    <p>추가하기</p>
                </button>
            </div>         
        </div>
    );
}

export default BookList;
