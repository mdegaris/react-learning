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
  const cardContentClasses =
    classes['card-content'] + ' ' + (className !== null ? className : '');
  return (
    <div className={classes.container}>
      {title !== null && (
        <header className={classes.title}>
          <div>{title}</div>
        </header>
      )}
      <div className={cardContentClasses}>{children}</div>
    </div>
  );
};

export default Card;
