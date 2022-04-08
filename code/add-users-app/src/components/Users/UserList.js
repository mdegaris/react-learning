import React from 'react';
import UserItem from './UserItem';
import Card from '../UI/Card/Card';
import styles from './UserList.module.css';

const UserList = ({ userList }) => {
    return (
        <Card className={styles.container}>
            <ul className={styles.list}>
                {userList.map((user, index) => (
                    <UserItem key={index} name={user.name} age={user.age} />
                ))}
            </ul>
        </Card>
    );
};

export default UserList;
