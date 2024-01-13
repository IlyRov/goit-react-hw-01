import React from 'react';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <div className={styles.friendListItem}>
      <img className={styles.friendAvatar} src={avatar} alt={`${name}'s avatar`} />
      <p className={styles.friendName}>{name}</p>
      <span className={isOnline ? styles.online : styles.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  );
};

export default FriendListItem;
