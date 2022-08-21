import React, { useMemo } from "react";
import { AppProps, ServiceItem } from "../../../types";
import CompoundCountTable from "../../Tables/CompoundCountTable";
import ServiceVariablesTable from "../../Tables/ServiceVariablesTable";
import TaskTable from "../../Tables/TaskTable";
import Card from "../../UI/Card";
import styles from "./ServiceDetail.module.css";

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
        <ServiceVariablesTable
          title={variablesTitle}
          variables={props.service.variables}
        />
        <CompoundCountTable service={props.service} />
        <TaskTable />
      </div>
    </Card>
  );
}

export default SelectedService;
