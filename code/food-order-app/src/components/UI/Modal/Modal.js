import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Modal = ({ onClose, children }) => {
  const Backdrop = () => {
    return <div className={styles.backdrop} onClick={onClose}></div>;
  };

  const ModalOverlay = ({ children }) => {
    return <div className={styles.modal}>{children}</div>;
    // return <Card className={styles.modal}>{children}</Card>;
  };

  const portalElement = document.getElementById('overlays');

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
