import React from "react";
import * as S from "../../styles/Editor/ShareStyle";

import brownlogo from "../../assets/images/brownLogo.png";
import leftarrow from "../../assets/images/brownleftarrow.png";
import rightarrow from "../../assets/images/brownrightarrow.png";

function Share() {
    return (
        <S.share>
            <S.cavus_container>
                <S.page_btn src={leftarrow}></S.page_btn>
                <S.page_container>
                    <S.pagecounter>1 / 2</S.pagecounter>
                    <S.page></S.page>
                </S.page_container>
                <S.page_container>
                    <S.pagecounter>2 / 2</S.pagecounter>
                    <S.page></S.page>
                </S.page_container>
                <S.page_btn src={rightarrow}></S.page_btn>
            </S.cavus_container>
            <S.side>
                <S.btn_container>
                    <S.title style={{ marginTop: "31px" }}>
                        어떤 양식으로 저장하여 공유하시겠습니까?
                    </S.title>
                    <S.btn>PDF로 공유하기</S.btn>
                    <S.btn>URL로 복사하기</S.btn>
                    <S.title>아직 작업이 끝나지 않았나요?</S.title>
                    <S.btn>페이지 작업하기</S.btn>
                    <S.title>작업을 마무리 하시겠습니까?</S.title>
                    <S.btn>저장 후 대시보드로 돌아가기</S.btn>
                </S.btn_container>
                <S.logo_container>
                    <S.logo src={brownlogo}></S.logo>
                </S.logo_container>
            </S.side>
        </S.share>
    );
}

export default Share;
