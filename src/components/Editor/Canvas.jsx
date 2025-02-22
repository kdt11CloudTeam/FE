import React, { useRef, useState } from "react";
import { Rnd } from "react-rnd";
import * as C from "../../styles/Components/CanvusStyle";

import leftarrow from "../../assets/images/brownleftarrow.png";
import rightarrow from "../../assets/images/brownrightarrow.png";

function Canvas({
    pages,
    currentPage,
    setCurrentPage,
    setPages,
    setSelectedText,
    selectedText,
}) {
    const pageContainerRef = useRef(null);

    const handleTextChange = (id, newText) => {
        setPages((prev) => {
            const newPages = [...prev];
            newPages[currentPage] = newPages[currentPage].map((element) =>
                element.id === id ? { ...element, text: newText } : element
            );
            return newPages;
        });
    };

    const handleFocus = (id) => {
        setPages((prev) => {
            const newPages = [...prev];
            newPages[currentPage] = newPages[currentPage].map((element) =>
                element.id === id && element.text === "입력하세요"
                    ? { ...element, text: "" }
                    : element
            );
            return newPages;
        });
        setSelectedText(id); // 선택된 텍스트 요소 ID 설정
    };

    const handleClickOutside = () => {
        setSelectedText(null); // 텍스트가 아닌 다른 요소 선택 시 초기화
    };

    return (
        <C.canvus onClick={handleClickOutside}>
            <C.pagecounter>
                {currentPage + 1} / {pages.length}
            </C.pagecounter>
            <C.canvus_container>
                <C.page_btn
                    src={leftarrow}
                    onClick={(e) => {
                        e.stopPropagation();
                        currentPage > 0 && setCurrentPage(currentPage - 1);
                    }}
                />
                <C.page_container ref={pageContainerRef}>
                    {pages.map((pageElements, index) => (
                        <C.page
                            key={index}
                            style={{
                                display:
                                    index === currentPage ? "block" : "none",
                            }}
                        >
                            {pageElements.map((element) => (
                                <Rnd
                                    key={element.id}
                                    size={{
                                        width: element.width,
                                        height: element.height,
                                    }}
                                    position={{ x: element.x, y: element.y }}
                                    enableResizing={{
                                        top: false,
                                        right: true,
                                        bottom: true,
                                        left: false,
                                    }}
                                    bounds="parent"
                                    onDragStop={(e, d) => {
                                        setPages((prev) => {
                                            const newPages = [...prev];
                                            newPages[currentPage] = newPages[
                                                currentPage
                                            ].map((item) =>
                                                item.id === element.id
                                                    ? {
                                                          ...item,
                                                          x: d.x,
                                                          y: d.y,
                                                      }
                                                    : item
                                            );
                                            return newPages;
                                        });
                                    }}
                                    onResizeStop={(
                                        e,
                                        direction,
                                        ref,
                                        delta,
                                        position
                                    ) => {
                                        setPages((prev) => {
                                            const newPages = [...prev];
                                            newPages[currentPage] = newPages[
                                                currentPage
                                            ].map((item) =>
                                                item.id === element.id
                                                    ? {
                                                          ...item,
                                                          width: ref.offsetWidth,
                                                          height: ref.offsetHeight,
                                                          x: position.x,
                                                          y: position.y,
                                                      }
                                                    : item
                                            );
                                            return newPages;
                                        });
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation(); // 부모 이벤트 방지
                                        if (element.type === "text") {
                                            setSelectedText(element.id);
                                        } else {
                                            setSelectedText(null);
                                        }
                                    }}
                                >
                                    {element.type === "text" ? (
                                        <input
                                            type="text"
                                            value={element.text}
                                            onChange={(e) =>
                                                handleTextChange(
                                                    element.id,
                                                    e.target.value
                                                )
                                            }
                                            onFocus={() =>
                                                handleFocus(element.id)
                                            }
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                fontSize: element.fontSize,
                                                fontFamily: element.fontFamily,
                                            }}
                                        />
                                    ) : element.type === "image" ? (
                                        <img
                                            src={element.src}
                                            alt="Uploaded"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                    ) : null}
                                </Rnd>
                            ))}
                        </C.page>
                    ))}
                </C.page_container>
                <C.page_btn
                    src={rightarrow}
                    onClick={(e) => {
                        e.stopPropagation();
                        currentPage < pages.length - 1 &&
                            setCurrentPage(currentPage + 1);
                    }}
                ></C.page_btn>
            </C.canvus_container>
        </C.canvus>
    );
}

export default Canvas;
