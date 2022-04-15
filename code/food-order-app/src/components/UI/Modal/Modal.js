import React from 'react';
import Card from '../Card/Card';
import styles from './Modal.module.css';

const Modal = ({ children }) => {
    return (
        <div>
            <div className={styles.backdrop}></div>
            <Card className={styles.modal}>{children}</Card>
        </div>
    );
};

export default Modal;
