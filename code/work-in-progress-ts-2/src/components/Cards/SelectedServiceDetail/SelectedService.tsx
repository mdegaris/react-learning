import React, { useMemo } from "react";
import { AppProps, ServiceItem } from "../../../types";
import CompoundCountTable from "../../Tables/CompoundCountTable";
import ServiceVariablesTable from "../../Tables/ServiceVariablesTable";
import TaskTable from "../../Tables/TaskTable";
import Button from "../../UI/Inputs/Button/Button";
import Card from "../../UI/Card";
import styles from "./ServiceDetail.module.css";
import ExtractedReportsTable from "../../Tables/ExtractedReportsTable";

interface SelectedServiceProps extends AppProps {
  service: ServiceItem;
  title: string;
}

function SelectedService(props: SelectedServiceProps) {
  const variablesTitle = useMemo(() => "Variables", []);

  return (
    <Card title={props.title}>
      <div className={styles.service}>
        <div className={styles.deadline}>
          Deadline: {props.service.deadlineDate}
        </div>
        <div className={styles.manager}>
          Study Manager: {props.service.studyManager}
        </div>
        <CompoundCountTable service={props.service} />
        <ServiceVariablesTable
          title={variablesTitle}
          variables={props.service.variables}
        />
        <TaskTable />
        <ExtractedReportsTable service={props.service} />
      </div>
    </Card>
  );
}

export default SelectedService;
