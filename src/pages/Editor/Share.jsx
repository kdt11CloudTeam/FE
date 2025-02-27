import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../axios/axios_instance";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import * as S from "../../styles/Editor/ShareStyle";

import brownlogo from "../../assets/images/brownLogo.png";
import leftarrow from "../../assets/images/brownleftarrow.png";
import rightarrow from "../../assets/images/brownrightarrow.png";

function Share() {
    const { bookId } = useParams(); // URL에서 bookId 가져오기
    const navigate = useNavigate();
    const [pages, setPages] = useState([]); // 페이지 데이터
    const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 인덱스
    const pdfRef = useRef(); // PDF 변환을 위한 ref

    // 📡 모든 페이지 조회 API 요청
    useEffect(() => {
        const fetchPages = async () => {
            const parsedBookId = parseInt(bookId, 10);

            try {
                const response = await axiosInstance.request({
                    method: "get",
                    url: "page/all",
                    data: { bookId: parsedBookId },
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                console.log("✅ 페이지 조회 성공:", response.data);

                setPages(response.data);
            } catch (error) {
                console.error("❌ 페이지 조회 실패:", error);
            }
        };

        fetchPages();
    }, [bookId]);

    const exportToPDF = async () => {
        const pdf = new jsPDF("p", "mm", "a4");

        for (let i = 0; i < pages.length; i++) {
            const pageElement = pdfRef.current.children[i]; // 각 페이지 요소 가져오기
            if (!pageElement) continue;

            // 📌 페이지 카운터 숨기기
            const pageCounter = pageElement.querySelector(".pagecounter");
            if (pageCounter) pageCounter.style.display = "none";

            // 📸 페이지 캡처
            const canvas = await html2canvas(pageElement, { scale: 2 });
            const imgData = canvas.toDataURL("image/png");
            const imgWidth = 210; // A4 너비 (mm)
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            // 📝 PDF에 추가 (첫 페이지만 `addImage`, 이후 `addPage`)
            if (i > 0) pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

            // 📌 페이지 카운터 다시 보이기
            if (pageCounter) pageCounter.style.display = "block";
        }

        // PDF 저장
        pdf.save(`MoABook.pdf`);
    };

    const copyShareURL = () => {
        console.log("📌 현재 bookId:", bookId);
        const shareURL = `${window.location.origin}/share/${bookId}`; // 실제 bookId 포함
        navigator.clipboard
            .writeText(shareURL)
            .then(() => {
                alert(`📋 공유 URL이 복사되었습니다!\n${shareURL}`);
            })
            .catch((err) => {
                console.error("❌ URL 복사 실패:", err);
            });
    };

    return (
        <S.share>
            {/* 📄 페이지 컨테이너 */}
            <S.cavus_container>
                {/* ◀ 이전 페이지 버튼 (첫 번째 페이지에서는 비활성화) */}
                <S.page_btn
                    src={leftarrow}
                    onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 0))
                    }
                    style={{
                        opacity: currentPage === 0 ? 0.3 : 1,
                        cursor: currentPage === 0 ? "default" : "pointer",
                    }}
                />

                {/* 📄 PDF로 변환할 페이지 */}
                <div ref={pdfRef}>
                    {pages.length === 1 ? (
                        <S.page_container>
                            <S.pagecounter>
                                {pages[0]?.pageId} / {pages.length}
                            </S.pagecounter>
                            <S.page>
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
                                                style={{
                                                    width: 100,
                                                    height: 100,
                                                }}
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
                            </S.page>
                        </S.page_container>
                    ) : (
                        <S.page_container>
                            <S.pagecounter>
                                {pages[currentPage]?.pageId} / {pages.length}
                            </S.pagecounter>
                            <S.page>
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
                            </S.page>
                        </S.page_container>
                    )}
                </div>

                {/* ▶ 다음 페이지 버튼 (마지막 페이지에서는 비활성화) */}
                <S.page_btn
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
            </S.cavus_container>

            {/* 🎯 공유 및 저장 옵션 */}
            <S.side>
                <S.btn_container>
                    <S.title style={{ marginTop: "31px" }}>
                        어떤 양식으로 저장하여 공유하시겠습니까?
                    </S.title>
                    <S.btn onClick={exportToPDF}>PDF로 공유하기</S.btn>{" "}
                    {/* 📥 PDF 저장 버튼 */}
                    <S.btn onClick={copyShareURL}>URL로 복사하기</S.btn>
                    <S.title>아직 작업이 끝나지 않았나요?</S.title>
                    <S.btn onClick={() => navigate(-1)}>페이지 작업하기</S.btn>
                    <S.title>작업을 마무리 하시겠습니까?</S.title>
                    <S.btn onClick={() => navigate(`/groups/:groupId`)}>
                        저장 후 대시보드로 돌아가기
                    </S.btn>
                </S.btn_container>
                <S.logo_container>
                    <S.logo src={brownlogo}></S.logo>
                </S.logo_container>
            </S.side>
        </S.share>
    );
}

export default Share;
