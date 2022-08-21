import React from "react";
import DateInput from "../../Inputs/DateInput";
import ServiceInput from "../../Inputs/ServiceInput";
import StudyInput from "../../Inputs/StudyInput";
import Card from "../../UI/Card";
import styles from "./WorkFilter.module.css";

type Props = {};

const WorkFilter = (props: Props) => {
  return (
    <div className={styles.container}>
      <Card>
        <div className={styles.content}>
          <DateInput />
          <ServiceInput />
          <StudyInput />
        </div>
      </Card>
    </div>
  );
};

export default WorkFilter;
