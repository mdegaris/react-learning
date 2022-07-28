import React from "react";
import WorkFilter from "../../../Cards/WorkFilter";
import ServiceList from "../../../Cards/ServiceList";
import ServiceDetail from "../../../Cards/ServiceDetail";
import styles from "./MonthlyWork.module.css";
import Header from "./Header";

type Props = {};

const MonthlyWork = (props: Props) => {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <div className={styles.container}>
        <WorkFilter />
        <ServiceList />
        {/* <ServiceDetail /> */}
      </div>
    </React.Fragment>
  );
};

export default MonthlyWork;
