import React, { useState, useEffect } from 'react';
import styles from './Folder.module.css';

// 폴더 이미지 import
import blueFolder from '../../assets/images/folder/blueFolder.png';
import greenFolder from '../../assets/images/folder/greenFolder.png';
import orangeFolder from '../../assets/images/folder/orangeFolder.png';
import purpleFolder from '../../assets/images/folder/purpleFolder.png';
import redFolder from '../../assets/images/folder/redFolder.png';
import yellowFolder from '../../assets/images/folder/yellowFolder.png';

// 폴더 설정 이미지 import
import YellowSetting from '../../assets/images/folderSetting/YellowSetting.png';
import BlueSetting from '../../assets/images/folderSetting/BlueSetting.png';
import GreenSetting from '../../assets/images/folderSetting/GreenSetting.png';
import OrangeSetting from '../../assets/images/folderSetting/OrangeSetting.png';
import PurpleSetting from '../../assets/images/folderSetting/PurpleSetting.png';
import RedSetting from '../../assets/images/folderSetting/RedSetting.png';

import EditGroupModal from './EditGroupModal';

const folderImages = {
    Blue: blueFolder,
    Green: greenFolder,
    Orange: orangeFolder,
    Purple: purpleFolder,
    Red: redFolder,
    Yellow: yellowFolder
};

const settingImages = {
    Blue: BlueSetting,
    Green: GreenSetting,
    Orange: OrangeSetting,
    Purple: PurpleSetting,
    Red: RedSetting,
    Yellow: YellowSetting
};

function Folder({ groupId, name, color, onClick, onUpdate, onDelete }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [folderColor, setFolderColor] = useState(color);
    const [folderName, setFolderName] = useState(name);
    const [isDeleted, setIsDeleted] = useState(false); // 삭제 상태 관리

    useEffect(() => {
        setFolderColor(color);
        setFolderName(name);
    }, [color, name]);

    const folderImage = folderImages[folderColor] || yellowFolder;
    const settingImage = settingImages[folderColor] || YellowSetting;

    const handleEdit = () => {
        setIsModalOpen(true);
    };

    const closeModal = (updatedColor, updatedTitle, isDeleted) => {
        setIsModalOpen(false);

        if (isDeleted) {
            setIsDeleted(true);
            if (onDelete) onDelete(groupId); // 부모 컴포넌트에서 삭제 반영
            return;
        }

        if (updatedColor && updatedColor !== folderColor) {
            setFolderColor(updatedColor);
        }
        if (updatedTitle && updatedTitle !== folderName) {
            setFolderName(updatedTitle);
        }
        if (onUpdate) {
            onUpdate(groupId, updatedTitle, updatedColor);
        }
    };

    if (isDeleted) return null; // 삭제된 경우 UI에서 숨김

    return (
        <div className={styles.frame}>
            <button className={styles.settingButton} onClick={handleEdit}>
                <img src={settingImage} alt="설정" />
            </button>

            <button onClick={onClick} className={styles.folderButton}>
                <img src={folderImage} alt="폴더" />
                <p>{folderName}</p>
            </button>

            {isModalOpen && (
                <EditGroupModal 
                    onClose={closeModal} 
                    currentColor={folderColor} 
                    currentTitle={folderName} 
                    groupId={groupId}
                />
            )}
        </div>
    );
}

export default Folder;
