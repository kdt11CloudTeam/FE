import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as T from "../../styles/Components/ToolbarStyle";

import logo from "../../assets/images/whiteLogo.png";
import texticon from "../../assets/images/texticon.png";
import imgicon from "../../assets/images/imgicon.png";
import urlicon from "../../assets/images/urlicon.png";
import shareicon from "../../assets/images/shareicon.png";
import leftarrowicon from "../../assets/images/leftarrow.png";

function Toolbar({
    addPage,
    deletePage,
    addText,
    addImage,
    selectedText,
    updateTextStyle,
}) {
    const navigate = useNavigate();
    const { groupId, bookId } = useParams();
    const [isHidden, setIsHidden] = useState(false);

    const toggleToolbar = () => {
        setIsHidden(!isHidden);
    };
    const [fontSize, setFontSize] = useState("");

    useEffect(() => {
        console.log("🔍 선택된 텍스트:", selectedText); // 디버깅용 로그 추가

        if (selectedText && selectedText.fontSize) {
            setFontSize(selectedText.fontSize.replace("px", "")); // "px" 제거 후 숫자만 저장
        }
    }, [selectedText]);

    const handleFontSizeChange = (e) => {
        let value = e.target.value;

        // 사용자가 숫자를 모두 지운 경우 빈 문자열 유지 (입력 가능하도록)
        if (value === "") {
            setFontSize("");
            return;
        }

        // 숫자가 아니면 업데이트 방지
        if (isNaN(value)) return;

        setFontSize(value); // UI 업데이트
        updateTextStyle("fontSize", `${value}px`); // 캔버스에 반영
    };

    return (
        <T.toolbar>
            <T.toolbar_container isHidden={isHidden}>
                <T.toolbar_header>
                    <T.toolbar_logo src={logo} />
                </T.toolbar_header>
                <T.toolbar_title>페이지 관리</T.toolbar_title>
                <T.page_controls>
                    <T.page_btn onClick={() => addPage()}>
                        페이지 추가
                    </T.page_btn>
                    <T.page_btn onClick={() => deletePage()}>
                        페이지 삭제
                    </T.page_btn>
                    <T.page_btn
                        onClick={() =>
                            navigate(`/groups/${groupId}/books/${bookId}/view`)
                        }
                    >
                        페이지 전체 읽기
                    </T.page_btn>
                    <T.page_btn>페이지 저장</T.page_btn>
                </T.page_controls>
                {/* 구분선 */}
                <T.toolbar_line />
                <T.toolbar_title>기능</T.toolbar_title>
                <T.content_controls>
                    <T.content_btn onClick={() => addText()}>
                        텍스트 추가
                        <T.content_img
                            src={texticon}
                            style={{
                                width: "70px",
                                height: "18px",
                                marginTop: "28px",
                                marginBottom: "28px",
                            }}
                        />
                    </T.content_btn>
                    <T.content_btn
                        onClick={() =>
                            document.getElementById("imageUpload").click()
                        }
                    >
                        이미지 추가
                        <T.content_img
                            src={imgicon}
                            style={{ width: "48px", height: "48px" }}
                        />
                    </T.content_btn>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={addImage}
                        style={{ display: "none" }}
                        id="imageUpload"
                    />

                    <T.content_btn>
                        URL 추가
                        <T.content_img
                            src={urlicon}
                            style={{
                                width: "70px",
                                height: "18px",
                                marginTop: "28px",
                                marginBottom: "28px",
                            }}
                        />
                    </T.content_btn>
                    <T.content_btn
                        onClick={() =>
                            navigate(`/groups/${groupId}/books/${bookId}/share`)
                        }
                    >
                        공유하기
                        <T.content_img
                            src={shareicon}
                            style={{
                                width: "32px",
                                height: "40px",
                                marginTop: "17px",
                                marginBottom: "17px",
                            }}
                        />
                    </T.content_btn>
                </T.content_controls>
                {selectedText && (
                    <>
                        <T.toolbar_line />
                        <T.toolbar_title>세부설정</T.toolbar_title>
                        <T.toolbar_subtitle
                            style={{ padding: "13px 0 16px 0" }}
                        >
                            폰트
                        </T.toolbar_subtitle>
                        <T.text_controls>
                            <T.text_btn
                                onClick={() =>
                                    updateTextStyle("fontFamily", "Pretendard")
                                }
                            >
                                Pretendard
                            </T.text_btn>
                            <T.text_btn
                                onClick={() =>
                                    updateTextStyle("fontFamily", "goorm Sans")
                                }
                            >
                                goorm Sans
                            </T.text_btn>
                        </T.text_controls>
                        <T.toolbar_subtitle>폰트 크기</T.toolbar_subtitle>
                        <T.text_controls>
                            <T.text_input
                                type="number"
                                value={fontSize}
                                onChange={handleFontSizeChange}
                            />
                        </T.text_controls>
                    </>
                )}
            </T.toolbar_container>
            <T.toolbar_toggle isHidden={isHidden} onClick={toggleToolbar}>
                <T.toggle_img
                    src={leftarrowicon}
                    style={{ transform: isHidden ? "scaleX(-1)" : "scaleX(1)" }}
                />
            </T.toolbar_toggle>
        </T.toolbar>
    );
}

export default Toolbar;
