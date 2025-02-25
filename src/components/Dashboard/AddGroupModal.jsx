import React, { useState } from 'react';
import styles from './AddGroupModal.module.css';

function AddGroupModal({ onClose, onAddGroup }) {
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('#F4C28F'); 

    // HEX 코드와 색상 이름 매핑
    const colorMap = {
        '#FFCACA': 'red',
        '#F9F0CF': 'yellow',
        '#FFCFA5': 'orange',
        '#C5F1B8': 'green',
        '#BAE0EB': 'blue',
        '#C9C8F4': 'purple'
    };

    const handleSubmit = () => {
        if (title.trim() === '') return; 

        const colorName = colorMap[color] || 'unknown';

        onAddGroup({ title, color: colorName }); 
        onClose(); 
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
                        {['#FFCACA', '#F9F0CF', '#FFCFA5', '#C5F1B8', '#BAE0EB', '#C9C8F4'].map((c) => (
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
