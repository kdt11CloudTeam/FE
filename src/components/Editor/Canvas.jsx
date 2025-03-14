import React, { useEffect, useRef } from "react";
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

    useEffect(() => {
        console.log("📌 현재 페이지 Index:", currentPage);
        console.log(
            "📌 전체 페이지 리스트:",
            pages.map((p) => p.pageId)
        );
    }, [currentPage, pages]);

    const handleTextChange = (id, newText) => {
        setPages((prev) =>
            prev.map((page, index) =>
                index === currentPage
                    ? {
                          ...page,
                          elements: page.elements.map((element) =>
                              element.id === id
                                  ? { ...element, text: newText }
                                  : element
                          ),
                      }
                    : page
            )
        );
    };

    const handleFocus = (id) => {
        setPages((prev) => {
            return prev.map((page, index) =>
                index === currentPage
                    ? {
                          ...page,
                          elements: page.elements.map((element) =>
                              element.id === id && element.text === "입력하세요"
                                  ? { ...element, text: "" }
                                  : element
                          ),
                      }
                    : page
            );
        });

        // ✅ 선택된 텍스트 요소의 전체 객체 저장
        const selectedElement = pages[currentPage]?.elements.find(
            (element) => element.id === id
        );

        if (selectedElement) {
            setSelectedText(selectedElement);
        }
    };

    const handleClickOutside = () => {
        setSelectedText(null); // ✅ 텍스트가 아닌 다른 곳 클릭 시 초기화
    };

    return (
        <C.canvus onClick={handleClickOutside}>
            <C.pagecounter>
                {pages.length > 0
                    ? `${currentPage} / ${pages[pages.length-1].pageNumber}`
                    : "0 / 0"}
            </C.pagecounter>

            <C.canvus_container>
                {/* ◀️ 이전 페이지 버튼 */}
                <C.page_btn
                    src={leftarrow}
                    onClick={(e) => {
                        e.stopPropagation();
                        if (currentPage > pages[0].pageNumber) {
                            setCurrentPage(currentPage - 1);
                        }
                    }}
                    style={{
                        opacity: currentPage === pages[0].pageNumber ? 0.3 : 1,
                        cursor: currentPage === pages[0].pageNumber ? "default" : "pointer",
                    }}
                />

                <C.page_container ref={pageContainerRef}>
                    {pages.map((page, index) => (
                        <C.page
                            key={page.pageId || `page-${index}`}
                            style={{
                                display:
                                    index === currentPage ? "block" : "none",
                                backgroundColor: "#fff",
                            }}
                        >
                            {page.elements.map((element, idx) => (
                                <Rnd
                                    key={element.id || `element-${idx}`}
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
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (element.type === "text") {
                                            handleFocus(element.id); // ✅ `handleFocus` 적용
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

                {/* ▶️ 다음 페이지 버튼 */}
                <C.page_btn
                    src={rightarrow}
                    onClick={(e) => {
                        e.stopPropagation();
                        if (currentPage < pages[pages.length-1].pageNumber) {
                            setCurrentPage(currentPage + 1);
                        }
                    }}
                    style={{
                        opacity: currentPage >= pages[pages.length-1].pageNumber ? 0.3 : 1,
                        cursor:
                            currentPage >= pages[pages.length-1].pageNumber
                                ? "default"
                                : "pointer",
                    }}
                />
            </C.canvus_container>
        </C.canvus>
    );
}

export default Canvas;
