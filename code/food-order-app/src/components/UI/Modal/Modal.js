import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card/Card';
import styles from './Modal.module.css';

const Modal = ({ outsideHandler, children }) => {
    const Backdrop = () => {
        return <div className={styles.backdrop} onClick={outsideHandler}></div>;
    };

    const ModalOverlay = ({ children }) => {
        return <Card className={styles.modal}>{children}</Card>;
    };

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{children}</ModalOverlay>,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
};

export default Modal;
