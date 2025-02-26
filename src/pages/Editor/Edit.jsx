import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axios/axios_instance";
import Toolbar from "../../components/Editor/Toolbar";
import Canvas from "../../components/Editor/Canvas";
import * as E from "../../styles/Editor/EditStyle";

function Edit() {
    const { bookId } = useParams(); // URL에서 bookId 가져오기
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedText, setSelectedText] = useState(null);

    // 첫 번째 페이지 생성 (API 연동)
    useEffect(() => {
        const createFirstPage = async () => {
            try {
                const response = await axiosInstance.post("/page", {
                    bookId: parseInt(bookId, 10),
                });

                console.log("첫 번째 페이지 생성 성공:", response.data);

                setPages([{ pageId: response.data.pageId, elements: [] }]); // 응답 받은 pageId 저장
            } catch (error) {
                console.error("첫 페이지 생성 중 오류:", error);
            }
        };

        createFirstPage();
    }, [bookId]); // bookId가 바뀔 때마다 실행

    // 페이지 추가 (API 연동)
    const addPage = async () => {
        try {
            const response = await axiosInstance.post("/page", {
                bookId: parseInt(bookId, 10),
            });

            console.log("새로운 페이지 추가 성공:", response.data);

            setPages((prevPages) => [
                ...prevPages,
                { pageId: response.data.pageId, elements: [] },
            ]);
            setCurrentPage(pages.length);
        } catch (error) {
            console.error("페이지 추가 중 오류:", error);
        }
    };

    // 페이지 삭제
    const deletePage = () => {
        if (pages.length > 1) {
            const newPages = pages.filter((_, index) => index !== currentPage);
            setPages(newPages);
            setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
            console.log("페이지 삭제됨! 현재 페이지 개수:", newPages.length);
        } else {
            alert("최소 한 개의 페이지는 남아 있어야 합니다!");
        }
    };

    return (
        <>
            <E.edit_container>
                <Toolbar
                    addPage={addPage}
                    deletePage={deletePage}
                    selectedText={selectedText}
                />
                <Canvas
                    pages={pages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setPages={setPages}
                    setSelectedText={setSelectedText}
                    selectedText={selectedText}
                />
            </E.edit_container>
        </>
    );
}

export default Edit;
