import React, { useMemo } from "react";
import { AppProps, ServiceItem } from "../../../types";
import ServiceVariablesTable from "../../Tables/ServiceVariablesTable";
import Card from "../../UI/Card";
import styles from "./ServiceDetail.module.css";

interface SelectedServiceProps extends AppProps {
  service: ServiceItem;
  title: string;
}

function SelectedService(props: SelectedServiceProps) {
  const variablesTitle = useMemo(
    () => props.service.serviceName + " " + props.service.serviceCode,
    [props.service]
  );

  return (
    <Card title={props.title}>
      <div className={styles.service}>
        <div className={styles.deadline}>
          Deadline: {props.service.deadlineDate}
        </div>
        <div className={styles.manager}>
          Study Manager: {props.service.studyManager}
        </div>
        <div>
          <ServiceVariablesTable
            title={variablesTitle}
            variables={props.service.variables}
          />
        </div>
      </div>
    </Card>
  );
}

export default SelectedService;
