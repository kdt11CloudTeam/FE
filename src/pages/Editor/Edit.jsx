import React, { useState } from "react";
import Toolbar from "../../components/Editor/Toolbar";
import Canvus from "../../components/Editor/Canvas";
import * as E from "../../styles/Editor/EditStyle";

function Edit() {
    const [pages, setPages] = useState([[]]);
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedText, setSelectedText] = useState(null);

    const addPage = () => {
        const newPages = [...pages, []];
        setPages(newPages);
        setCurrentPage(newPages.length - 1);
        console.log("새로운 페이지 추가됨! 현재 페이지 개수:", newPages.length);
    };

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
                    addText={addText}
                    addImage={addImage}
                    selectedText={selectedText}
                    updateTextStyle={updateTextStyle}
                />
                <Canvus
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
