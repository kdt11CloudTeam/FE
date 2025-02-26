import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axios/axios_instance";
import Toolbar from "../../components/Editor/Toolbar";
import Canvas from "../../components/Editor/Canvas";
import * as E from "../../styles/Editor/EditStyle";

function Edit() {
    const { bookId } = useParams();
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedText, setSelectedText] = useState(null);

    // 첫 번째 페이지 생성 (API 연동)
    useEffect(() => {
        const createFirstPage = async () => {
            console.log(localStorage.getItem("jwtToken"));
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
    }, [bookId]);

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

    // 페이지 삭제 (API 연동)
    const deletePage = async () => {
        if (pages.length > 1) {
            try {
                const pageIdToDelete = pages[currentPage].pageId; // 삭제할 페이지 ID 가져오기

                await axiosInstance.delete("/page", {
                    data: {
                        bookId: parseInt(bookId, 10),
                        pageId: pageIdToDelete,
                    },
                });

                console.log(`페이지 ${pageIdToDelete} 삭제 성공`);

                const newPages = pages.filter(
                    (_, index) => index !== currentPage
                );
                setPages(newPages);
                setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
            } catch (error) {
                console.error("페이지 삭제 중 오류:", error);
            }
        } else {
            alert("최소 한 개의 페이지는 남아 있어야 합니다!");
        }
    };

    const addText = () => {
        const newElement = {
            id: Date.now(),
            type: "text",
            text: "입력하세요",
            width: 150,
            height: 50,
            x: 50,
            y: 50,
            fontSize: 10,
            fontFamily: "pretendard",
        };
        setPages((prev) => {
            const newPages = [...prev];
            newPages[currentPage] = [...newPages[currentPage], newElement];
            return newPages;
        });
    };

    const addImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newImage = {
                    id: Date.now(),
                    type: "image",
                    src: e.target.result,
                    width: 150,
                    height: 150,
                    x: 50,
                    y: 50,
                };
                setPages((prev) => {
                    const newPages = [...prev];
                    newPages[currentPage] = [
                        ...newPages[currentPage],
                        newImage,
                    ];
                    return newPages;
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const updateTextStyle = (property, value) => {
        if (!selectedText) return;

        setPages((prev) => {
            const newPages = [...prev];
            newPages[currentPage] = newPages[currentPage].map((element) =>
                element.id === selectedText
                    ? { ...element, [property]: value }
                    : element
            );
            return newPages;
        });
    };

    return (
        <>
            <E.edit_container>
                <Toolbar
                    addPage={addPage}
                    deletePage={deletePage}
                    selectedText={selectedText}
                    addText={addText}
                    addImage={addImage}
                    updateTextStyle={updateTextStyle}
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
