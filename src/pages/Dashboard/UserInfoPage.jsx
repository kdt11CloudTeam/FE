import React from 'react';

import UserInfo from "../../components/Dashboard/UserInfo";
import { userData } from "./mockdata"

function UserInfoPage() {
    return (
         <UserInfo userData = {userData}/>
    );
}

export default UserInfoPage;



