import React from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './Dialog.module.css';

const Dialog = ({ onOkay, title, children }) => {
    return (
        <div>
            <div className={styles.backfade} onClick={onOkay}></div>
            <Card>
                <div className={styles.dialog}>
                    <header>{title}</header>
                    <div>{children}</div>
                    <footer>
                        <Button onClick={onOkay}>Okay</Button>
                    </footer>
                </div>
            </Card>
        </div>
    );
};

export default Dialog;
