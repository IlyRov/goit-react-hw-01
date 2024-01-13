import React from 'react';
import Profile from './Profile';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
