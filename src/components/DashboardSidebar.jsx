import React from "react";
import logo from "../assets/images/DashboardSidebarLogo.png";
import userIcon from "../assets/images/userIcon.png";
import backgroundImage from "../assets/images/DashboardSidebarBG.png"; // 배경 이미지 추가
import styles from "./DashboardSidebar.module.css";

function DashboardSidebar({ username, userImage }) {
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
                    <li className={styles.active}>내 정보</li>
                    <li>그룹</li>
                </ul>
            </nav>
        </div>
    );
}

export default DashboardSidebar;
