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
            {groupList.map((group) => {
                const onClick = () => {
                    navigate(`/groups/${group.groupId}`);
                };

                return (
                    <Folder 
                        key={group.groupId}  
                        name={group.title} 
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
    );
}

export default GroupList;
