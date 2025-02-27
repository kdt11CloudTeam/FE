// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axiosInstance from "../../axios/axios_instance";
// import BookList from "../../components/Dashboard/BookList";

// function BookListPage() {
//     const [currentBookList, setBookList] = useState([]);
//     const { groupId } = useParams(); 

//     // 책 데이터 가져오는 함수
//     const getBooks = async () => {
//         try {
//             const response = await axiosInstance.request({
//                 method: "get", 
//                 url: `/book/${groupId}`,
//             });

//             if (response.status === 200) {
//                 console.log("책 조회를 성공하였습니다.", response.data);
//                 setBookList(response.data?.data?.books || []);
//             }
//         } catch (error) {
//             console.error("책 조회에 실패하였습니다.", error);
//         }
//     };

//     // 페이지 로드 시 책 데이터 가져오기
//     useEffect(() => {
//         getBooks(); 
//     }, []);

//     return (
//         <div>
//             <BookList initialBookList={currentBookList} />
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
            <BookList initialBookList={currentBookList} />
        </div>
    );
}

export default BookListPage;
