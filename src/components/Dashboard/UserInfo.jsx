import React, { useState } from "react";
import styles from "./UserInfo.module.css";
import ConfirmPopup from "./ConfirmPopup"; 

function UserInfo({ userData }) {
  const [userName, setUserName] = useState(userData.userName);
  const [userAge, setUserAge] = useState(userData.userAge);
  const [userInterest, setUserInterest] = useState(userData.userInterest);
  const [userEmail, setUserEmail] = useState(userData.userEmail);
  const [userAlarm, setUserAlarm] = useState(userData.userAlarm);

  // 팝업 노출 여부
  const [showPopup, setShowPopup] = useState(false);
  // 팝업에 표시할 메시지
  const [popupMessage, setPopupMessage] = useState("");
  // 확인 버튼을 눌렀을 때 동작할 콜백
  const [onConfirmCallback, setOnConfirmCallback] = useState(() => {});

  // 팝업 닫기
  const handleCancel = () => {
    setShowPopup(false);
  };

  // "삭제하기" 버튼을 눌렀을 때
  const handleDeleteClick = () => {
    setPopupMessage("정말 삭제하시겠습니까?\n중요한 기록이 사라져 복구할 수 없습니다.");
    // 삭제 로직을 담은 콜백
    setOnConfirmCallback(() => {
      return () => {
        console.log("데이터 삭제 로직 실행");
        // 예: 서버에 삭제 요청 등
        setShowPopup(false);
      };
    });
    setShowPopup(true);
  };

  // "로그아웃" 버튼을 눌렀을 때
  const handleLogoutClick = () => {
    setPopupMessage("정말 로그아웃하시겠습니까?");
    // 로그아웃 로직을 담은 콜백
    setOnConfirmCallback(() => {
      return () => {
        console.log("로그아웃 로직 실행");
        // 예: 서버에 로그아웃 요청 등
        setShowPopup(false);
      };
    });
    setShowPopup(true);
  };

  // "탈퇴하기" 버튼을 눌렀을 때
  const handleWithdrawClick = () => {
    setPopupMessage("정말 탈퇴하시겠습니까?\n탈퇴 시 계정을 복구할 수 없습니다.");
    // 탈퇴 로직을 담은 콜백
    setOnConfirmCallback(() => {
      return () => {
        console.log("계정 탈퇴 로직 실행");
        // 예: 서버에 탈퇴 요청 등
        setShowPopup(false);
      };
    });
    setShowPopup(true);
  };

  return (
    <div className={styles.frame}>
      <p>내 정보</p>
            {/* showPopup이 true일 때만 ConfirmPopup 노출 */}
            {showPopup && (
        <ConfirmPopup
          message={popupMessage}
          onConfirm={onConfirmCallback}
          onCancel={handleCancel}
        />
      )}

      <div className={styles.innerframe}>
        <div className={styles.section}>
          <p className={styles.subtitle}>이름</p>
          <input
            className={styles.alter}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className={styles.section}>
          <div className={styles.innersection}>
            <p className={styles.subtitle}>나이</p>
            <p className={styles.description}>
              향후 업데이트에서 분석을 통해 <br />
              동일한 나이대의 모아북을 추천해드립니다.
            </p>
          </div>
          <input
            className={styles.alter}
            value={userAge}
            onChange={(e) => setUserAge(e.target.value)}
          />
        </div>

        <div className={styles.section}>
          <div className={styles.innersection}>
            <p className={styles.subtitle}>관심분야</p>
            <p className={styles.description}>
              관심있는 분야를 선택해주세요. <br />
              향후 업데이트에서 원하는 분야를 추천해드립니다.
            </p>
          </div>
          <select
            className={styles.alter}
            value={userInterest}
            onChange={(e) => setUserInterest(e.target.value)}
          >
            <option value="poem">시, 글귀</option>
            <option value="novel">소설</option>
            <option value="self-development">자기계발</option>
          </select>
        </div>
      </div>

      <div className={styles.innerframe}>
        <div className={styles.section}>
          <div className={styles.innersection}>
            <p className={styles.subtitle}>기록 삭제</p>
            <p className={styles.description}>
              현재까지 가지고 있던 데이터(그룹, 모아북)를 모두 삭제합니다.
              <br />
              중요한 기록이 사라져 복구할 수 없으니 신중히 선택해주세요.
            </p>
          </div>
          <button className={styles.alter} onClick={handleDeleteClick}>
            삭제하기
          </button>
        </div>

        <div className={styles.section}>
          <p className={styles.subtitle}>로그아웃</p>
          <button className={styles.alter} onClick={handleLogoutClick}>
            로그아웃
          </button>
        </div>

        <div className={styles.section}>
          <div className={styles.innersection}>
            <p className={styles.subtitle}>탈퇴하기</p>
            <p className={styles.description}>
              현재 계정을 탈퇴합니다.
              <br />
              계정이 사라지므로 신중히 선택해주세요.
            </p>
          </div>
          <button className={styles.alter} onClick={handleWithdrawClick}>
            탈퇴하기
          </button>
        </div>
      </div>

      <div className={styles.innerframe}>
        <div className={styles.section}>
          <div className={styles.innersection}>
            <p className={styles.subtitle}>알림 설정</p>
            <p className={styles.description}>
              알림 기능을 끄거나 켤 수 있습니다.
            </p>
          </div>
          <button
            className={styles.alter}
            onClick={() => setUserAlarm(!userAlarm)}
          >
            {userAlarm ? "알림 끄기" : "알림 켜기"}
          </button>
        </div>

        <div className={styles.section}>
          <div className={styles.innersection}>
            <p className={styles.subtitle}>알림 수신 이메일 설정</p>
            <p className={styles.description}>
              이전에 설정한 이메일을 수정하거나, 아직 이메일을 등록하지 않았다면 <br />
              새로운 이메일을 등록해서 알림을 수신받을 수 있습니다.
            </p>
          </div>
          <input
            className={styles.alter}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <br/>
      </div>
    </div>
  );
}

export default UserInfo;
