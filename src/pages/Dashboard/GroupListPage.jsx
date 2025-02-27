import React, { useState, useEffect } from 'react';
import GroupList from "../../components/Dashboard/GroupList";
import { groupList } from "./mockdata"; 
import axiosInstance from '../../axios/axios_instance';

function GroupListPage() {
    const [currentGroupList, setGroupList] = useState(groupList);

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

    return (
        <div>
            <GroupList groupList={currentGroupList} setGroupList={setGroupList} /> 
        </div>
    );
}

export default GroupListPage;
