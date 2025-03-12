import React, { useState } from "react";
import styles from "./AddGroupModal.module.css";
import axiosInstance from "../../axios/axios_instance";
import { useParams } from "react-router-dom";

function AddBookModal({ onClose }) {
  const [title, setTitle] = useState("");
  const { groupId } = useParams();
  console.log(groupId);

  const handleSubmit = async () => {
    if (title.trim() === "") return;

    try {
      const response = await axiosInstance.post("/book", {
        groupId: groupId,
        name: title,
      });

      console.log("그룹 생성 성공:", response.data);

      onClose();
    } catch (error) {
      console.error(
        "에러 발생:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className={styles.frame}>
      <div className={styles.innerFrame}>
        <div className={styles.paddingFrame}>
          <p>생성하고자 하는 책의 제목을 적어주세요.</p>
          <input
            type="text"
            placeholder="제목 입력"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
        </div>

        <button
          className={title.trim() ? styles.submitButton : styles.disabledButton}
          onClick={handleSubmit}
          disabled={!title.trim()}
        >
          제출하기
        </button>
      </div>
    </div>
  );
}

export default AddBookModal;
