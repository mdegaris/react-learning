import React, { useMemo } from "react";
import { AppProps, ServiceItem } from "../../../types";
import SelectedService from "./SelectedService";
import styles from "./ServiceDetail.module.css";

interface ServiceDetailsProps extends AppProps {
  isLoading: boolean;
  service?: ServiceItem;
}

const ServiceDetail = (props: ServiceDetailsProps) => {
  const service = props.service;
  const title = useMemo(
    () =>
      service
        ? service.serviceName + " : " + service.study + "-" + service.round
        : "",
    [service]
  );

  const displayLoading = props.isLoading && !props.service;
  const displaySelectedService = !displayLoading;

  return (
    <div className={styles.container}>
      {displayLoading && <div>Loading...</div>}
      {displaySelectedService && props.service && (
        <SelectedService service={props.service} title={title} />
      )}
    </div>
  );
};

export default ServiceDetail;
