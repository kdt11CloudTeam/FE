import React, { useState, useEffect } from 'react';
import styles from "./Layout.module.css";
import DashboardSidebar from "./DashboardSidebar";
import axiosInstance from '../../axios/axios_instance';

function Layout({ children }) {
    const [currentGroupList, setGroupList] = useState([]);
    

    // 그룹 데이터 가져오는 함수
    const getGroups = async () => {
        try {
            const response = await axiosInstance.get('/group');
            
            if (response.status === 200) {
                console.log('그룹 조회를 성공하였습니다.', response.data);
                setGroupList(response.data.data.groups); 
            }
        } catch (error) {
            console.error('그룹 조회에 실패하였습니다.', error);
        }
    };

    // 페이지 로드 시 그룹 데이터 가져오기
    useEffect(() => {
        getGroups(); 
    }, []);

    const username = localStorage.getItem("name"); 
    const userImage = localStorage.getItem("profileImage");


    return (
        <div className={styles.frame}>
            <div className={styles.sidebar}>
                <DashboardSidebar groupList = {currentGroupList} username={username}userImage = {userImage}/>
            </div>
            <div className={styles.children}>
                { children }
            </div>
        </div>
    )
}

export default Layout;