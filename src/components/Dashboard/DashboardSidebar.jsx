import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./DashboardSidebar.module.css";

import logo from "../../assets/images/blackLogo.png";
import userIcon from "../../assets/images/userIcon.png";
import backgroundImage from "../../assets/images/DashboardSidebarBG.png"; 

function DashboardSidebar({ username, userImage, groupList }) {
    const location = useLocation();
    const navigate = useNavigate();

    // 현재 경로 확인
    const isUserInfo = location.pathname === "/userinfo";
    const isGroup = location.pathname.startsWith("/groups");

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
                        style={{
                            backgroundColor: isUserInfo ? "#CEA595" : "transparent",
                            color: isUserInfo ? "white" : "#A07B6A"
                        }}
                        onClick={() => navigate("/userinfo")}
                    >
                        내 정보
                    </button>

                    <button 
                        style={{
                            backgroundColor: isGroup ? "#CEA595" : "transparent",
                            color: isGroup ? "white" : "#A07B6A"
                        }}
                        onClick={() => navigate("/groups")}
                    >
                        그룹
                    </button>

                    {isGroup && groupList.map((group) => {
                        const isActiveGroup = location.pathname === `/groups/${group.groupId}`;

                        return (
                            <button 
                                key={group.groupId}
                                style={{
                                    backgroundColor: isActiveGroup ? "#CEA595" : "#DFC1B5",
                                    color: isActiveGroup ? "#835541" : "#FFFFFF"
                                }}
                                onClick={() => navigate(`/groups/${group.groupId}`)}
                                className={styles.groupButton}
                            >
                                <p>{group.title}</p>
                            </button>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default DashboardSidebar;
