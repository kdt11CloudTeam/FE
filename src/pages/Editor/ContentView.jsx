import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../axios/axios_instance";
import * as C from "../../styles/Editor/ContentViewStyle";

import brownlogo from "../../assets/images/brownLogo.png";
import leftarrow from "../../assets/images/brownleftarrow.png";
import rightarrow from "../../assets/images/brownrightarrow.png";

function ContentView() {
    const { bookId } = useParams(); // URL에서 bookId 가져오기
    const navigate = useNavigate();
    const [pages, setPages] = useState([]); // 페이지 데이터
    const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 인덱스

    // 📡 모든 페이지 조회 API 요청
    useEffect(() => {
        const fetchPages = async () => {
            try {
                const response = await axiosInstance.get("/page/all", {
                    params: { bookId: parseInt(bookId, 10) },
                });

                console.log("✅ 페이지 조회 성공:", response.data);

                setPages(response.data); // 페이지 목록 저장
            } catch (error) {
                console.error("❌ 페이지 조회 실패:", error);
            }
        };

        fetchPages();
    }, [bookId]);

    return (
        <C.contentview>
            {/* 로고 */}
            <C.logo_container>
                <C.logo src={brownlogo} />
            </C.logo_container>

            {/* 📄 페이지 컨테이너 */}
            <C.cavus_container>
                {/* ◀ 이전 페이지 버튼 (첫 번째 페이지에서는 비활성화) */}
                <C.page_btn
                    src={leftarrow}
                    onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 0))
                    }
                    style={{
                        opacity: currentPage === 0 ? 0.3 : 1,
                        cursor: currentPage === 0 ? "default" : "pointer",
                    }}
                />

                {/* 📄 페이지 개수에 따른 동적 렌더링 */}
                {pages.length === 1 ? (
                    <C.page_container>
                        <C.pagecounter>
                            {pages[0]?.pageId} / {pages.length}
                        </C.pagecounter>
                        <C.page>
                            {/* 페이지 내부 요소 렌더링 */}
                            {pages[0]?.elements.map((element, index) => (
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
                                    ) : element.elementType === "IMG" ? (
                                        <img
                                            src={element.content}
                                            alt="이미지"
                                            style={{ width: 100, height: 100 }}
                                        />
                                    ) : element.elementType === "URL" ? (
                                        <a
                                            href={element.content}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {element.content}
                                        </a>
                                    ) : null}
                                </div>
                            ))}
                        </C.page>
                    </C.page_container>
                ) : (
                    <>
                        <C.page_container>
                            <C.pagecounter>
                                {pages[currentPage]?.pageId} / {pages.length}
                            </C.pagecounter>
                            <C.page>
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
                            </C.page>
                        </C.page_container>

                        {currentPage + 1 < pages.length && (
                            <C.page_container>
                                <C.pagecounter>
                                    {pages[currentPage + 1]?.pageId} /{" "}
                                    {pages.length}
                                </C.pagecounter>
                                <C.page>
                                    {pages[currentPage + 1]?.elements.map(
                                        (element, index) => (
                                            <div
                                                key={index}
                                                style={{
                                                    position: "absolute",
                                                    left: element.xPosition,
                                                    top: element.yPosition,
                                                }}
                                            >
                                                {element.elementType ===
                                                "TEXT" ? (
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
                                </C.page>
                            </C.page_container>
                        )}
                    </>
                )}

                <C.page_btn
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
            </C.cavus_container>

            {/* 🔙 뒤로 가기 버튼 */}
            <C.back_container>
                <C.back_btn onClick={() => navigate(-1)}>나가기</C.back_btn>
            </C.back_container>
        </C.contentview>
    );
}

export default ContentView;
