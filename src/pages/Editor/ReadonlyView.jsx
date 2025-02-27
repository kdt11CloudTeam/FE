import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axios/axios_instance";
import * as R from "../../styles/Editor/ContentViewStyle";

import brownlogo from "../../assets/images/brownLogo.png";
import leftarrow from "../../assets/images/brownleftarrow.png";
import rightarrow from "../../assets/images/brownrightarrow.png";

function ReadonlyView() {
    const { bookId } = useParams(); // 공유된 bookId 가져오기
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    // 📡 공유된 책 데이터 불러오기
    useEffect(() => {
        const fetchSharedPages = async () => {
            try {
                const response = await axiosInstance.get("/page/all", {
                    params: { bookId: parseInt(bookId, 10) },
                });

                console.log("✅ 공유된 페이지 조회 성공:", response.data);
                setPages(response.data);
            } catch (error) {
                console.error("❌ 공유된 페이지 조회 실패:", error);
            }
        };

        fetchSharedPages();
    }, [bookId]);

    return (
        <R.contentview>
            <R.logo_container>
                <R.logo src={brownlogo} />
            </R.logo_container>

            <R.cavus_container>
                <R.page_btn
                    src={leftarrow}
                    onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 0))
                    }
                    style={{
                        opacity: currentPage === 0 ? 0.3 : 1,
                        cursor: currentPage === 0 ? "default" : "pointer",
                    }}
                />

                {/* 📄 페이지 개수에 따라 렌더링 */}
                <div style={{ display: "flex", gap: "10px" }}>
                    {pages.length > 0 && (
                        <R.page_container>
                            <R.pagecounter>
                                {pages[currentPage]?.pageId} / {pages.length}
                            </R.pagecounter>
                            <R.page>
                                {pages[currentPage]?.elements.map(
                                    (element, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                position: "absolute",
                                                left: element.xPosition,
                                                top: element.yPosition,
                                            }}
                                        >
                                            {element.elementType === "TEXT" ? (
                                                <p>{element.content}</p>
                                            ) : element.elementType ===
                                              "IMG" ? (
                                                <img
                                                    src={element.content}
                                                    alt="이미지"
                                                    style={{
                                                        width: 100,
                                                        height: 100,
                                                    }}
                                                />
                                            ) : element.elementType ===
                                              "URL" ? (
                                                <a
                                                    href={element.content}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {element.content}
                                                </a>
                                            ) : null}
                                        </div>
                                    )
                                )}
                            </R.page>
                        </R.page_container>
                    )}
                </div>

                <R.page_btn
                    src={rightarrow}
                    onClick={() =>
                        setCurrentPage((prev) =>
                            Math.min(prev + 1, pages.length - 1)
                        )
                    }
                    style={{
                        opacity: currentPage >= pages.length - 1 ? 0.3 : 1,
                        cursor:
                            currentPage >= pages.length - 1
                                ? "default"
                                : "pointer",
                    }}
                />
            </R.cavus_container>
        </R.contentview>
    );
}

export default ReadonlyView;
