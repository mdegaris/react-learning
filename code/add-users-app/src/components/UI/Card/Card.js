import React from 'react';
import styles from './Card.module.css';

const Card = ({ className, children }) => {
    const cardStyles = `${styles.card} ${className}`;
    return <div className={cardStyles}>{children}</div>;
};

export default Card;
