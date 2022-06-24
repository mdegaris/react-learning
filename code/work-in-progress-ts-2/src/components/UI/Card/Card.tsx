import React from 'react';
import classes from './Card.module.css';

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
  const cardClasses =
    classes.card + ' ' + (className !== null ? className : '');
  return (
    <div className={cardClasses}>
      {title !== null && (
        <header className={classes.title}>
          <div>{title}</div>
        </header>
      )}
      <div className={classes['card-content']}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;
