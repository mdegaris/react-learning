import React from 'react';
import styles from './Card.module.css';

type CardProps = {
  title?: string | null;
  className?: string | null;
  children?: React.ReactNode | null;
};

const Card = ({
  title = null,
  className = null,
  children = null,
}: CardProps) => {
  const cardContentstyles =
    styles['card-content'] + ' ' + (className !== null ? className : '');
  return (
    <div className={styles.container}>
      {title !== null && (
        <header className={styles.title}>
          <div>{title}</div>
        </header>
      )}
      <div className={cardContentstyles}>{children}</div>
    </div>
  );
};

export default Card;
