import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = ({ onBackdropClick }) => {
  return <div className={styles.backdrop} onClick={onBackdropClick} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ onClose: onBackdropClick, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={onBackdropClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
