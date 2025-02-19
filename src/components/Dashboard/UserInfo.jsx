import styles from "./UserInfo.module.css";
import React from 'react';

function UserInfo() {
    return (
        <div className={styles.frame}>
            <p className={styles.title}>내 정보</p>

            <div className={styles.innerframe}>
                <div className={styles.section}>
                    <p className={styles.subtitle}>이름</p>
                    <input className={styles.alter} placeholder="홍길동"></input>
                </div>

                <div className={styles.section}>
                    <div className={styles.innersection}>
                        <p>나이</p>
                        <p className={styles.description}>향후 업데이트에서 분석을 통해 <br/> 동일한 나이대의 모아북을 추천해드립니다.</p>
                    </div>
                    <input className={styles.alter} placeholder="500살"></input>
                </div>

                <div className={styles.section}>
                    <div className={styles.innersection}>
                        <p>관심분야</p>
                        <p className={styles.description}>관심있는 분야를 선택해주세요. <br/>향후 업데이트에서 원하는 분야를 추천해드립니다.</p>
                    </div>
                    <select className={styles.alter}>
                        <option>시, 글귀</option>
                        <option>소설</option>
                        <option>자기계발</option>
                    </select>
                </div>
            </div>

            <div className={styles.innerframe}>
                <div className={styles.section}>
                    <div className={styles.innersection}>
                    <p>기록 삭제</p>
                    <p className={styles.description}>현재까지 가지고 있던 데이터(그룹, 모아북)를 모두 삭제합니다.<br/>중요한 기록이 사라져 복구할 수 없으니 신중히 선택해주세요.</p>
                    </div>
                    <button className={styles.alter}>삭제하기</button>
                </div>

                <div className={styles.section}>
                    <p>로그아웃</p>
                    <button className={styles.alter}>로그아웃</button>
                </div>

                <div className={styles.section}>
                    <div className={styles.innersection}>
                        <p>탈퇴하기</p>
                        <p className={styles.description}>현재 계정을 탈퇴합니다.<br/>계정이 사라지므로 신중히 선택해주세요.</p>
                    </div>
                    <button className={styles.alter}>탈퇴하기</button>
                </div>
            </div>
            
            <div className={styles.innerframe}>
                <div className={styles.section}>
                    <div className={styles.innersection}>
                        <p>알림 설정</p>
                        <p className={styles.description}>알림 기능을 끄거나 켤 수 있습니다.</p>
                    </div>
                    <button className={styles.alter}>알림 끄기</button>
                </div>

                <div className={styles.section}>
                    <div className={styles.innersection}>
                        <p>알림 수신 이메일 설정</p>
                        <p className={styles.description}>이전에 설정한 이메일을 수정하거나, 아직 이메일을 등록하지 않았다면 <br/>새로운 이메일을 등록해서 알림을 수신받을 수 있습니다.</p>
                    </div>
                    <input className={styles.alter} placeholder="moAbook@gmail.com"></input>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
