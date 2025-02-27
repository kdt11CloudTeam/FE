// import React, { useState } from 'react';
// import styles from './EditGroupModal.module.css';
// import axiosInstance from '../../axios/axios_instance';

// function EditGroupModal({ groupId, currentTitle, currentColor, onClose }) {
//     const [title, setTitle] = useState(currentTitle || '');
//     const [color, setColor] = useState(currentColor || '#F4C28F');

//     const colorMap = {
//         '#FFCACA': 'Red',
//         '#F9F0CF': 'Yellow',
//         '#FFCFA5': 'Orange',
//         '#C5F1B8': 'Green',
//         '#BAE0EB': 'Blue',
//         '#C9C8F4': 'Purple'
//     };

//     const handleSubmit = async () => {
//         if (!title.trim()) return;

//         const colorName = colorMap[color] || 'Yellow';

//         try {
//             const response = await axiosInstance.put('/group', {  
//                 name: title,
//                 color: colorName,
//                 groupId,
//             });

//             console.log('그룹 수정 성공:', response.data);

//             // 변경된 데이터 전달
//             onClose(colorName, title);
//         } catch (error) {
//             console.error('에러 발생:', error.response ? error.response.data : error.message);
//         }
//     };

//     return (
//         <div className={styles.frame}>
//             <div className={styles.innerFrame}>
//                 <div className={styles.paddingFrame}>
//                     <p>폴더 제목을 입력하세요.</p>
//                     <input 
//                         type="text" 
//                         placeholder="제목 입력" 
//                         value={title} 
//                         onChange={(e) => setTitle(e.target.value)}
//                         className={styles.input}
//                     />

//                     <p className={styles.title}>색상 변경</p>
//                     <div className={styles.colorPicker}>
//                         {Object.keys(colorMap).map((c) => (
//                             <button 
//                                 key={c} 
//                                 className={`${styles.colorButton} ${color === c ? styles.selected : ''}`} 
//                                 style={{ backgroundColor: c }} 
//                                 onClick={() => setColor(c)}
//                             />
//                         ))}
//                     </div>
//                 </div>
                
//                 <button 
//                     className={title.trim() ? styles.submitButton : styles.disabledButton} 
//                     onClick={handleSubmit}
//                     disabled={!title.trim()}
//                 >
//                     수정하기
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default EditGroupModal;


import React, { useState, useEffect } from 'react';
import styles from './EditGroupModal.module.css';
import axiosInstance from '../../axios/axios_instance';

function EditGroupModal({ groupId, currentTitle, currentColor, onClose }) {
    const [title, setTitle] = useState('');
    const [color, setColor] = useState(currentColor || '#F4C28F');

    const colorMap = {
        '#FFCACA': 'Red',
        '#F9F0CF': 'Yellow',
        '#FFCFA5': 'Orange',
        '#C5F1B8': 'Green',
        '#BAE0EB': 'Blue',
        '#C9C8F4': 'Purple'
    };

    // 모달이 열릴 때 title을 빈 문자열로 초기화
    useEffect(() => {
        setTitle('');
    }, [groupId]);

    const handleSubmit = async () => {
        if (!title.trim()) return;

        const colorName = colorMap[color] || 'Yellow';

        try {
            const response = await axiosInstance.put('/group', {  
                name: title,
                color: colorName,
                groupId,
            });

            console.log('그룹 수정 성공:', response.data);

            // 변경된 데이터 전달
            onClose(colorName, title);
        } catch (error) {
            console.error('에러 발생:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className={styles.frame}>
            <div className={styles.innerFrame}>
                <div className={styles.paddingFrame}>
                    <p>폴더 제목을 입력하세요.</p>
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
                    수정하기
                </button>
            </div>
        </div>
    );
}

export default EditGroupModal;
