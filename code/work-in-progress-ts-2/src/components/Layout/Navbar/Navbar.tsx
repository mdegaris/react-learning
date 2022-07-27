import React from "react";
import styles from "./Navbar.module.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <div>
            <img src="/image/work-time.png" alt="Monthly Work" />
          </div>
        </li>
        <li>
          <div>
            <img src="/image/table-data.png" alt="Monthly Work" />
          </div>
        </li>
        {/* <li>
          <div>Fulfilment Matrix</div>
        </li> */}
        <li>
          <div>
            <img src="/image/folder.png" alt="Monthly Work" />
          </div>
        </li>
        <li>
          <div>
            <img src="/image/extraction.png" alt="Monthly Work" />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
