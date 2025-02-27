import React, { useState } from 'react';
import styles from './AddGroupModal.module.css';
import axiosInstance from '../../axios/axios_instance'; 

function AddGroupModal({ onClose, onAddGroup }) {
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('#F4C28F'); 


        const colorMap = {
        '#FFCACA': 'Red',
        '#F9F0CF': 'Yellow',
        '#FFCFA5': 'Orange',
        '#C5F1B8': 'Green',
        '#BAE0EB': 'Blue',
        '#C9C8F4': 'Purple'
    };

    const handleSubmit = async () => {
        if (title.trim() === '') return; 

        const colorName = colorMap[color] || 'Yellow';

        try {
            const response = await axiosInstance.post('/group', {  
                name: title,
                color: colorName
            });

            console.log('그룹 생성 성공:', response.data);  

            onAddGroup({ title, color: colorName });
            onClose();
        } catch (error) {
            console.error('에러 발생:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className={styles.frame}>
            <div className={styles.innerFrame}>
                <div className={styles.paddingFrame}>
                    <p>생성하고자 하는 폴더의 제목을 적어주세요.</p>
                    <input 
                        type="text" 
                        placeholder="제목 입력" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                        className={styles.input}
                    />

                    <p className={styles.title}>색상 변경</p>
                    <div className={styles.colorPicker}>
                        {Object.keys(colorMap).map((c) => (
                            <button 
                                key={c} 
                                className={`${styles.colorButton} ${color === c ? styles.selected : ''}`} 
                                style={{ backgroundColor: c }} 
                                onClick={() => setColor(c)}
                            />
                        ))}
                    </div>
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

export default AddGroupModal;
