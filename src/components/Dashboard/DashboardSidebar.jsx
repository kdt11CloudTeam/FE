import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./DashboardSidebar.module.css";

import logo from "../../assets/images/blackLogo.png";
import userIcon from "../../assets/images/userIcon.png";
import backgroundImage from "../../assets/images/DashboardSidebarBG.png"; // 배경 이미지 추가

function DashboardSidebar({ username, userImage }) {
    // 현재 경로를 useLocation으로 가져와서 groups랑 userinfo, /groups/:groupId일 때 각 변수를 true로 설정
    // const isPages = location.pathname === "/groups/:groupId";
    const location = useLocation();
    const isGroup = location.pathname === "/groups";
    const isUserInfo = location.pathname === "/userinfo";

    // 각 버튼 클릭 시 해당 페이지로 이동
    const navigate = useNavigate();
    const handleUserInfo = () => {
        navigate("/userinfo");
    };
    const handleGroup = () => {
        navigate("/groups");
    }

    return (
        <div className={styles.frame} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Logo" className={styles.logo} />
            </div>
            <div className={styles.profile}>
                <img src={userImage || userIcon} alt="User Profile" className={styles.userImage} />
                <p className={styles.username}>{username || "@@@"}</p>
            </div>
            <nav className={styles.menu}>
                <ul>
                    <button 
                        style={{backgroundColor: isUserInfo ? "#CEA595" : "transparent", color: isUserInfo ? "white" : "#A07B6A" }}
                        onClick={handleUserInfo}
                    >
                        내 정보
                    </button>
                    <button 
                        style={{backgroundColor: isGroup ? "#CEA595" : "transparent", color: isGroup ? "white" : "#A07B6A" }}
                        onClick={handleGroup}
                    >
                        그룹
                    </button>
                </ul>
            </nav>
        </div>
    );
}

export default DashboardSidebar;


