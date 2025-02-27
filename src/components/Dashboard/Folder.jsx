import React from 'react';
import styles from './Folder.module.css';

// 폴더 이미지 import
import blueFolder from '../../assets/images/folder/blueFolder.png';
import greenFolder from '../../assets/images/folder/greenFolder.png';
import orangeFolder from '../../assets/images/folder/orangeFolder.png';
import purpleFolder from '../../assets/images/folder/purpleFolder.png';
import redFolder from '../../assets/images/folder/redFolder.png';
import yellowFolder from '../../assets/images/folder/yellowFolder.png';

// 폴더 수정/삭제 버
import YellowSetting from '../../assets/images/folderSetting/YellowSetting.png';
import BlueSetting from '../../assets/images/folderSetting/BlueSetting.png';
import GreenSetting from '../../assets/images/folderSetting/GreenSetting.png';      
import OrangeSetting from '../../assets/images/folderSetting/OrangeSetting.png';
import PurpleSetting from '../../assets/images/folderSetting/PurpleSetting.png';
import RedSetting from '../../assets/images/folderSetting/RedSetting.png';

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

/**
 * @param {Object} props
 * @param {string} props.name
 * @param {'blue' | 'green'} props.color
 * @param {() => void} props.onClick
 */
function Folder({ name, color, onClick }) {
    const folderImage = folderImages[color] || yellowFolder;
    const settingImage = settingImages[color] || YellowSetting;

    // const handleEdit 누르면 AddGroupModal랑 거의 같지만 삭제버튼까지 있는 모달 하나 생성해서 띄우기
    // onClick={handleEdit} 추가

    return (
        <div className={styles.frame}>
            <button className={styles.settingButton}>
                <img src={settingImage} alt="setting" />
            </button>
            <button onClick={onClick} className={styles.folderButton}>
                <img src={folderImage} alt="folder" />
                <p>{name}</p>
            </button>
        </div>

    );
}

export default Folder;
