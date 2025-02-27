import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './GroupList.module.css'; 
import Folder from './Folder';
import AddGroupModal from './AddGroupModal';
import addFolder from '../../assets/images/addFolder.png';

function GroupList({ groupList, setGroupList }) { 
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addFolderOnclick = () => {
        setIsModalOpen(true); 
    };

    const handleAddGroup = (newGroup) => {
        const updatedGroupList = [...groupList, { 
            ...newGroup,
            groupId: groupList.length + 1
        }];
        setGroupList(updatedGroupList); 
    };

    return (
        <div className={styles.frame}>
            <p>원하는 MoABook을 선택해주세요.</p>
            <div className={styles.gridFrame}>                
                {groupList.map((group) => {
                    const onClick = () => {
                        navigate(`/groups/${group.groupId}`);
                    };

                    return (
                        <Folder 
                            key={group.groupId}  
                            name={group.name} 
                            color={group.color} 
                            onClick={onClick} 
                        />
                    );
                })}
            
                <button onClick={addFolderOnclick} className={styles.button} aria-label="Add folder">
                    <img src={addFolder} alt="Add Folder" />
                </button>

                {isModalOpen && <AddGroupModal onClose={() => setIsModalOpen(false)} onAddGroup={handleAddGroup} />}
            </div>
        </div>
        
    );
}

export default GroupList;
