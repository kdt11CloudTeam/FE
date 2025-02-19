import React from 'react';
import styles from './Folder.module.css';

// 폴더 이미지 import
import blueFolder from '../../assets/images/folderColors/blueFolder.png';
import greenFolder from '../../assets/images/folderColors/greenFolder.png';
import orangeFolder from '../../assets/images/folderColors/orangeFolder.png';
import purpleFolder from '../../assets/images/folderColors/purpleFolder.png';
import redFolder from '../../assets/images/folderColors/redFolder.png';
import yellowFolder from '../../assets/images/folderColors/yellowFolder.png';


function Folder({ name, color, onClick }) {
    const folderImages = {
        blue: blueFolder,
        green: greenFolder,
        orange: orangeFolder,
        purple: purpleFolder,
        red: redFolder,
        yellow: yellowFolder
    };

    const folderImage = folderImages[color] || yellowFolder;

    return (
        <button onClick={onClick} className={styles.button}>
            <img src={folderImage} alt="folder" />
            <p>{name}</p>
        </button>
    );
}

export default Folder;
