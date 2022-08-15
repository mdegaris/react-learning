import React from "react";
import styles from "./Navbar.module.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.selected}>
          <img
            className={styles.image}
            src="/image/work-time.png"
            alt="Monthly Work"
          />
          <div className={styles.text}>Monthly Work</div>
        </li>
        <li className={styles["not-selected"]}>
          <img
            className={styles.image}
            src="/image/table-data.png"
            alt="Monthly Work"
          />
          <div className={styles.text}>Matrices</div>
        </li>
        <li className={styles["not-selected"]}>
          <img
            className={styles.image}
            src="/image/folder.png"
            alt="Monthly Work"
          />
          <div className={styles.text}>Round Browser</div>
        </li>
        <li className={styles["not-selected"]}>
          <img
            className={styles.image}
            src="/image/extraction.png"
            alt="Monthly Work"
          />
          <div className={styles.text}>Reports</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
