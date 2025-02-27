// import React from "react";
// import React, { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";
// import BookList from "../../components/Dashboard/BookList";

// function BookListPage() {
//     const [currentBookList, setBookList] = useState([]);
    
//     // 그룹 데이터 가져오는 함수
//     const getBooks = async () => {
//         try {
//             const response = await axiosInstance.get('/book');
            
//             if (response.status === 200) {
//                 console.log('책 조회를 성공하였습니다.', response.data);
//                 setBookList(response.data.data.books); 
//             }
//         } catch (error) {
//             console.error('책 조회에 실패하였습니다.', error);
//         }
//     };

//     // 페이지 로드 시 그룹 데이터 가져오기
//     useEffect(() => {
//         getBooks(); 
//     }, []);

//     const { groupId } = useParams(); 
//     const filteredBookList = currentBookList.filter(book => book.groupId.toString() === groupId);

//     return (
//         <div>
//             <BookList initialBookList = {filteredBookList}/>
//         </div>
//     );
// }

// export default BookListPage;


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
            const response = await axiosInstance.request({
                method: "get", 
                url: "/book",
                data: { groupId: 1 }, // GET 요청의 Body에 데이터 포함
                // params: { groupId: 0 }, // ✅ GET 요청에서는 params 사용

            });

            if (response.status === 200) {
                console.log("책 조회를 성공하였습니다.", response.data);
                setBookList(response.data?.data?.books || []);
            }
        } catch (error) {
            console.error("책 조회에 실패하였습니다.", error);
        }
    };

    // 페이지 로드 시 책 데이터 가져오기
    useEffect(() => {
        getBooks(); 
    }, []);

    // groupId가 undefined일 경우 방지
    const filteredBookList = groupId
        ? currentBookList.filter(book => book.groupId?.toString() === groupId)
        : currentBookList;

    return (
        <div>
            <BookList initialBookList={filteredBookList} />
        </div>
    );
}

export default BookListPage;
