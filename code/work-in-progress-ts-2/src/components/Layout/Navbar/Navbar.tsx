import React from 'react';
import styles from './Navbar.module.css';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <div>Monthly Work</div>
        </li>
        <li>
          <div>Service Matrix</div>
        </li>
        <li>
          <div>Fulfilment Matrix</div>
        </li>
        <li>
          <div>Round Browser</div>
        </li>
        <li>
          <div>Result Extraction</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
