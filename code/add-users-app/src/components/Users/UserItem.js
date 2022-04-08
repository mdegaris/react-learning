import React from 'react';
import styles from './UserItem.module.css';

const UserItem = ({ name, age }) => {
    return (
        <li className={styles.item}>
            {name}&nbsp;({age} years old)
        </li>
    );
};

export default UserItem;
