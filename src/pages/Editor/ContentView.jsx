import React from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../../styles/Editor/ContentViewStyle";

import brownlogo from "../../assets/images/brownLogo.png";
import leftarrow from "../../assets/images/brownleftarrow.png";
import rightarrow from "../../assets/images/brownrightarrow.png";

function ContentView() {
    const navigate = useNavigate();
    return (
        <C.contentview>
            <C.logo_container>
                <C.logo src={brownlogo} />
            </C.logo_container>
            <C.cavus_container>
                <C.page_btn src={leftarrow}></C.page_btn>
                <C.page_container>
                    <C.pagecounter>1 / 2</C.pagecounter>
                    <C.page></C.page>
                </C.page_container>
                <C.page_container>
                    <C.pagecounter>2 / 2</C.pagecounter>
                    <C.page></C.page>
                </C.page_container>
                <C.page_btn src={rightarrow}></C.page_btn>
            </C.cavus_container>
            <C.back_container>
                <C.back_btn onClick={() => navigate(-1)}>나가기</C.back_btn>
            </C.back_container>
        </C.contentview>
    );
}

export default ContentView;
