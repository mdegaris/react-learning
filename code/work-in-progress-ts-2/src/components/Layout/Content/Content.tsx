import React from "react";
import MonthlyWork from "./MonthlyWork";
import styles from "./Content.module.css";

type Props = {};

const Content = (props: Props) => {
  return (
    <div className={styles.content}>
      <MonthlyWork />
    </div>
    // <MonthlyWork />
  );
};

export default Content;
