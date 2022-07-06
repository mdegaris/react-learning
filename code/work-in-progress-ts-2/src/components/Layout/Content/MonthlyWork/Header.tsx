import React from 'react';
import styles from './MonthlyWork.module.css';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>Monthly Work</div>
      <div className={styles.subtitle}>
        Services deadlines for a particular month and year.
      </div>
    </div>
  );
};

export default Header;
