import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axios/axios_instance";
import BookList from "../../components/Dashboard/BookList";

function BookListPage() {
  const [currentBookList, setBookList] = useState([]);
  const { groupId } = useParams();

  // 책 데이터 가져오는 함수
  const getBooks = async () => {
    try {
      const response = await axiosInstance.get(`/book/${groupId}`);

      if (response.status === 200) {
        console.log("책 조회 성공:", response.data);
        setBookList(response.data?.data?.books || []);
      }
    } catch (error) {
      console.error("책 조회 실패:", error);
    }
  };

  // groupId 변경 시 책 데이터 가져오기
  useEffect(() => {
    if (groupId) {
      getBooks();
    }
  }, [groupId]);

  return (
    <div>
      <BookList bookList={currentBookList} setBookList={setBookList} />
    </div>
  );
}

export default BookListPage;
