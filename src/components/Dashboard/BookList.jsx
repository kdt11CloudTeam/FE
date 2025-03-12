import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./BookList.module.css";
import AddBookModal from "./AddBookModal";
import addBook from "../../assets/images/addBook.png";
import mockDoc from "../../assets/images/mockDoc.png";

function BookList({ initialBookList }) {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // bookList를 useState로 관리하고, initialBookList가 변경될 때 업데이트
  const [bookList, setBookList] = useState(initialBookList || []);

  useEffect(() => {
    setBookList(initialBookList);
  }, [initialBookList]);

  // 새로운 책 추가 버튼 클릭 시 동작
  const addBookOnclick = () => {
    setIsModalOpen(true);
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
        <button className={styles.addBookButton} onClick={addBookOnclick}>
          <img src={addBook} alt="책 추가" />
          <p>추가하기</p>
        </button>
        {isModalOpen && <AddBookModal onClose={() => setIsModalOpen(false)} />}
      </div>
    </div>
  );
}

export default BookList;
