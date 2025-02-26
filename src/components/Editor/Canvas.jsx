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
        setSelectedText(id);
    };

    const handleClickOutside = () => {
        setSelectedText(null);
    };

    // 현재 `pageId`가 있는 페이지의 index를 찾기
    const currentPageIndex = pages.findIndex(
        (page) => page.pageId === currentPage
    );

    return (
        <C.canvus onClick={handleClickOutside}>
            <C.pagecounter>
                {pages.length > 0
                    ? `${currentPage} / ${pages.length}`
                    : "0 / 0"}
            </C.pagecounter>
            <C.canvus_container>
                <C.page_btn
                    src={leftarrow}
                    onClick={(e) => {
                        e.stopPropagation();
                        if (currentPageIndex > 0) {
                            setCurrentPage(pages[currentPageIndex - 1].pageId);
                        }
                    }}
                />
                <C.page_container ref={pageContainerRef}>
                    {pages.map((page) => (
                        <C.page
                            key={page.pageId}
                            style={{
                                display:
                                    page.pageId === currentPage
                                        ? "block"
                                        : "none",
                            }}
                        >
                            {page.elements.map((element) => (
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
                                            newPages[currentPageIndex] = {
                                                ...newPages[currentPageIndex],
                                                elements: newPages[
                                                    currentPageIndex
                                                ].elements.map((item) =>
                                                    item.id === element.id
                                                        ? {
                                                              ...item,
                                                              x: d.x,
                                                              y: d.y,
                                                          }
                                                        : item
                                                ),
                                            };
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
                                            newPages[currentPageIndex] = {
                                                ...newPages[currentPageIndex],
                                                elements: newPages[
                                                    currentPageIndex
                                                ].elements.map((item) =>
                                                    item.id === element.id
                                                        ? {
                                                              ...item,
                                                              width: ref.offsetWidth,
                                                              height: ref.offsetHeight,
                                                              x: position.x,
                                                              y: position.y,
                                                          }
                                                        : item
                                                ),
                                            };
                                            return newPages;
                                        });
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
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
                        if (currentPageIndex < pages.length - 1) {
                            setCurrentPage(pages[currentPageIndex + 1].pageId);
                        }
                    }}
                />
            </C.canvus_container>
        </C.canvus>
    );
}

export default Canvas;
