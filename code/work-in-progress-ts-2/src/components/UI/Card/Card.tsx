import React from 'react';
import { AppProps } from '../../../types';
import styles from './Card.module.css';

interface CardProps extends AppProps {
  title?: string | null;
  children?: React.ReactNode | null;
}

const Card = ({ title = null, className = '', children = null }: CardProps) => {
  const cardContentstyles = styles['card-content'] + ' ' + className;
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
